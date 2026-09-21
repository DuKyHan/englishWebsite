#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Validates a unit-content JSON against schema/UNIT_SCHEMA.md before the
engine builds any HTML. Fails loudly (raises) rather than silently
producing broken output — this is the "content accuracy audit" step run
at build time, on top of the runtime audit banner baked into TEST.
"""

def validate(data: dict) -> list:
    """Returns a list of problem strings. Empty list = clean."""
    problems = []

    def check_mcq_like(items, path, opts_key="options", ans_key="answer"):
        for i, it in enumerate(items):
            opts = it.get(opts_key)
            ans = it.get(ans_key)
            if opts is None or ans is None:
                problems.append(f"{path}[{i}]: missing '{opts_key}' or '{ans_key}'")
                continue
            if not isinstance(ans, int) or ans < 0 or ans >= len(opts):
                problems.append(f"{path}[{i}]: answer index {ans} out of range for {len(opts)} options")
            if not it.get("explanation"):
                problems.append(f"{path}[{i}]: missing explanation")

    def check_fill_like(items, path):
        for i, it in enumerate(items):
            if not it.get("answer"):
                problems.append(f"{path}[{i}]: missing answer")
            if not it.get("explanation"):
                problems.append(f"{path}[{i}]: missing explanation")

    meta = data.get("meta", {})
    for k in ["unit", "title", "grade", "book"]:
        if k not in meta:
            problems.append(f"meta.{k} missing")

    check_mcq_like(data.get("pronunciation", []), "pronunciation")
    check_mcq_like(data.get("stress", []), "stress")
    check_mcq_like(data.get("mcq", []), "mcq")
    check_mcq_like(data.get("pictures", []), "pictures")

    for r in data.get("readings", []):
        check_mcq_like(r.get("questions", []), f"readings[{r.get('key')}].questions")
    for t in data.get("true_false", []):
        check_mcq_like(t.get("questions", []), f"true_false[{t.get('key')}].questions")

    fam_bases = {f["base"] for f in data.get("word_families", [])}
    for i, wf in enumerate(data.get("word_formation", [])):
        if not wf.get("answer"):
            problems.append(f"word_formation[{i}]: missing answer")
        if wf.get("family_base") not in fam_bases:
            problems.append(f"word_formation[{i}]: family_base '{wf.get('family_base')}' not found in word_families")
        # need at least 2 other forms to build a (3-4 option) quiz; the
        # engine renders 1 + however many distractors exist (2 or 3), so
        # this is a floor, not a fixed 4-option requirement
        fam = next((f for f in data.get("word_families", []) if f["base"] == wf.get("family_base")), None)
        if fam and len([x for x in fam["forms"] if x["w"].lower() != wf["answer"].lower()]) < 2:
            problems.append(f"word_formation[{i}]: family '{wf.get('family_base')}' has fewer than 2 usable distractors")

    for i, t in enumerate(data.get("transformations", [])):
        for k in ["original", "starter", "answer", "explanation", "vi", "note"]:
            if not t.get(k):
                problems.append(f"transformations[{i}]: missing '{k}'")
        for j, e in enumerate(t.get("extra_practice", [])):
            for k in ["original", "starter", "answer"]:
                if not e.get(k):
                    problems.append(f"transformations[{i}].extra_practice[{j}]: missing '{k}'")

    for i, d in enumerate(data.get("dictionary", [])):
        for k in ["word", "ipa", "pos", "senses", "vi", "questions"]:
            if not d.get(k):
                problems.append(f"dictionary[{i}]: missing '{k}'")
        check_fill_like(d.get("questions", []), f"dictionary[{i}].questions")

    check_mcq_like(data.get("comprehension_quiz", []), "comprehension_quiz")

    for i, v in enumerate(data.get("vocabulary", [])):
        for k in ["w", "pos", "ipa", "vi"]:
            if not v.get(k):
                problems.append(f"vocabulary[{i}]: missing '{k}'")

    for i, f in enumerate(data.get("word_families", [])):
        if not f.get("forms") or len(f["forms"]) < 3:
            problems.append(f"word_families[{i}] ('{f.get('base')}'): needs at least 3 forms")

    grammar_tagged = sum(1 for q in data.get("mcq", []) if "grammar" in q.get("tags", []))
    if grammar_tagged < 5:
        problems.append(f"mcq: only {grammar_tagged} items tagged 'grammar' — Grammar app's test needs >=5 for a decent quiz")

    return problems


def summarize(data: dict) -> str:
    lines = [f"Unit {data['meta']['unit']}: {data['meta']['title']} (Grade {data['meta']['grade']}, {data['meta']['book']})"]
    for key in ["vocabulary","word_families","word_formation","pronunciation","stress","mcq",
                "readings","true_false","transformations","dictionary","pictures","comprehension_quiz"]:
        v = data.get(key, [])
        lines.append(f"  {key}: {len(v)}")
    total_test_items = (len(data.get("pronunciation", [])) + len(data.get("stress", [])) +
        len(data.get("mcq", [])) + len(data.get("word_formation", [])) +
        sum(len(r["questions"]) for r in data.get("readings", [])) +
        sum(len(t["questions"]) for t in data.get("true_false", [])) +
        len(data.get("transformations", [])) +
        sum(len(d["questions"]) for d in data.get("dictionary", [])) +
        len(data.get("pictures", [])))
    lines.append(f"  => TOTAL test items (all categories): {total_test_items}")
    return "\n".join(lines)


if __name__ == "__main__":
    import sys, json
    path = sys.argv[1] if len(sys.argv) > 1 else "data/unit1.json"
    with open(path, encoding="utf-8") as f:
        data = json.load(f)
    print(summarize(data))
    problems = validate(data)
    if problems:
        print(f"\n⚠️  {len(problems)} problem(s) found:")
        for p in problems:
            print("  -", p)
        sys.exit(1)
    else:
        print("\n✅ Schema validation passed — 0 problems.")
