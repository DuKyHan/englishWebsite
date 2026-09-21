#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Usage:
    python build.py data/unit1.json output/Unit1

Reads a schema-conforming unit content file (see schema/UNIT_SCHEMA.md),
validates it, and writes 4 self-contained HTML files:
  GS_UNIT<N>_VOCAB.html
  GS_UNIT<N>_GRAMMAR.html
  GS_UNIT<N>_INCLASS.html
  GS_UNIT<N>_TEST.html

To build a new unit: author data/unit2.json following the same schema
(reuse data/unit1.json as a template) — do NOT touch anything under
engine/, since that's the reusable core that stays fixed across units.
"""
import sys, os, json
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from engine import schema, build_vocab, build_grammar, build_inclass, build_test

def main():
    if len(sys.argv) < 3:
        print(__doc__)
        sys.exit(1)
    data_path, out_dir = sys.argv[1], sys.argv[2]

    with open(data_path, encoding="utf-8") as f:
        data = json.load(f)

    print(schema.summarize(data))
    problems = schema.validate(data)
    if problems:
        print(f"\n⚠️  {len(problems)} problem(s) found — fix data before building:")
        for p in problems:
            print("  -", p)
        sys.exit(1)
    print("\n✅ Schema validation passed.\n")

    unit_no = data["meta"]["unit"]
    os.makedirs(out_dir, exist_ok=True)

    modules = [
        (f"GS_UNIT{unit_no}_VOCAB.html", build_vocab),
        (f"GS_UNIT{unit_no}_GRAMMAR.html", build_grammar),
        (f"GS_UNIT{unit_no}_INCLASS.html", build_inclass),
        (f"GS_UNIT{unit_no}_TEST.html", build_test),
    ]
    for filename, module in modules:
        html = module.build(data)
        out_path = os.path.join(out_dir, filename)
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(html)
        print(f"  wrote {out_path} ({len(html):,} bytes)")

    print(f"\nDone. {len(modules)} files written to {out_dir}/")

if __name__ == "__main__":
    main()
