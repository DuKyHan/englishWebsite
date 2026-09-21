# GS Unit Content Schema (v1)

This schema is the **only thing that changes** from one Unit to the next.
The engine (`engine/*.py`) reads a JSON file that follows this shape and
produces 4 self-contained HTML files (VOCAB, GRAMMAR, INCLASS, TEST).
To build Unit 2, 3, 4... write a new `data/unitN.json` following this
schema and run `python build.py data/unitN.json output/UnitN`. The engine
code itself should never need to change for a new unit's content — only
for a new *feature*.

Top-level object:

```jsonc
{
  "meta": {
    "unit": 1,                     // unit number (int)
    "title": "Leisure Time",       // unit title as in the textbook
    "grade": 8,                    // grade level
    "book": "Global Success"       // textbook series name
  },

  // ---- VOCABULARY ----
  "vocabulary": [
    { "no": 1, "w": "leisure", "pos": "n", "ipa": "/ˈliːʒər/",
      "vi": "thời gian rảnh rỗi", "emoji": "🌴" }
    // ...
  ],

  // ---- WORD FAMILIES (word formation source data) ----
  "word_families": [
    { "base": "act", "vi_base": "hành động, đóng vai", "emoji": "🎬",
      "forms": [ { "w": "activate", "pos": "v", "vi": "kích hoạt" }, ... ] }
  ],

  // ---- WORD FORMATION EXERCISE ITEMS ----
  // "family_base" links each item to a word_families[].base so the engine
  // can auto-generate 4-option MCQ distractors from the SAME family —
  // no per-unit distractor authoring needed.
  "word_formation": [
    { "q": "1. The most popular leisure ___.", "hint": "(act)",
      "answer": "activity", "family_base": "act",
      "explanation": "...", "vi": "..." }
  ],

  // ---- PRONUNCIATION / STRESS ----
  "pronunciation": [
    { "q": "1. Which word...", "options": ["school","school","door","pool"],
      "answer": 2, "ipas": [...], "vis": [...], "explanation": "..." }
  ],
  "stress": [ /* same shape as pronunciation */ ],

  // ---- MULTIPLE CHOICE (vocabulary + grammar mixed) ----
  // "tags" drives automatic filtering for the Grammar app's comprehension
  // test and the Test app's stage labelling — no hand-picked index lists.
  "mcq": [
    { "q": "1. About 16%...", "options": [...], "answer": 2,
      "explanation": "...", "vi": "...", "tags": ["vocab"] }
    // tags: "vocab" | "grammar" | "mixed"
  ],

  // ---- READING (cloze) ----
  "readings": [
    { "key": "readingA", "title": "A) Mountain climbing", "html": "...",
      "vi": "...", "questions": [ { "q":"1.", "options":[...], "answer":0,
      "vis":[...], "explanation":"..." } ] }
  ],

  // ---- TRUE / FALSE ----
  "true_false": [
    { "key": "tfA", "title": "Teenagers' leisure activities", "html": "...",
      "vi": "...", "questions": [ { "q":"...", "options":["True","False"],
      "answer":1, "explanation":"..." } ] }
  ],

  // ---- SENTENCE TRANSFORMATION ----
  // "extra_practice" (>=3 items recommended) is embedded directly per
  // model sentence so the Grammar app can render "model + 3 more" blocks
  // without a separate lookup file.
  "transformations": [
    { "q": "1.", "dang": "DẠNG 1",
      "original": "It is really interesting for him to talk...",
      "starter": "He fancies", "answer": "talking with his music teacher...",
      "accepted": null, "explanation": "...", "vi": "...",
      "note": "It is interesting for sb to V → sb + fancies + V-ing",
      "extra_practice": [
        { "original": "...", "starter": "...", "answer": "...", "vi": "..." }
      ]
    }
  ],

  // ---- DICTIONARY ----
  "dictionary": [
    { "word": "leisure", "ipa": "/ˈliːʒər/", "pos": "noun",
      "senses": [ { "def": "...", "examples": ["...","...","..."] } ],
      "vi": "...", "questions": [ { "q":"A. ...", "answer":"leisure facilities",
      "explanation":"...", "vi":"..." } ] }
  ],

  // ---- PICTURES / SIGNS ----
  "pictures": [
    { "q": "1. What does the sign say?", "image": "<div>...</div>",
      "options": [...], "answer": 2, "vis": [...], "explanation": "..." }
  ],

  // ---- GRAMMAR LESSON (authored per unit; theory tables + mistakes) ----
  "grammar_lesson_html": "<div>...</div>",

  // ---- COMPREHENSION QUIZ (authored per unit; tests understanding,
  //      not just transformation practice) ----
  "comprehension_quiz": [
    { "q": "...", "options": [...], "answer": 1, "explanation": "...", "vi": "..." }
  ]
}
```

## What lives in the ENGINE instead of per-unit data (reused for every unit)

- The **Word Formation "how to solve" guide** (identify part of speech from
  sentence position, common suffix table, -ing/-ed rule, re-read step) —
  these are general English rules, not unit-specific.
- The **generic step-by-step sentence-writing method** (identify subject →
  identify tense/structure → choose verb form → check agreement → add
  complements → check spelling/punctuation) — a universal writing process.
- All JS: TTS voice selection, normalize(), confetti, quiz/flashcard/game
  engines, stage-partition algorithm for the Test app, WF-quiz distractor
  generator (derives options from `word_families` at build time).
- All CSS/visual design tokens (colors, fonts, card styles).

## Derived-at-build-time content (never hand-authored per unit)

- **Test app stages**: the engine walks every category in a fixed order
  (pronunciation → stress → mcq [chunked by 10] → word_formation →
  readings → true_false → transformations → dictionary → pictures) and
  auto-partitions them into ~10-question stages. Total must equal the sum
  of every category's length — the engine self-checks this on load and
  shows a red audit banner if anything doesn't add up.
- **Grammar app's "Test tổng hợp" MCQ subset**: filtered from `mcq` by
  `tags` containing `"grammar"` (falls back to `"mixed"` if too few).
- **Vocab app's Word-Form quiz distractors**: for each `word_formation`
  item, the engine looks up `word_families[base == family_base].forms`,
  picks 3 other forms as distractors + the correct answer, shuffles.

## Validation the engine runs before building (`engine/schema.py`)

- Every `mcq`/`pronunciation`/`stress`/reading-question/`pictures` item's
  `answer` index is within range of its `options`.
- Every `word_formation` item's `family_base` exists in `word_families`.
- No duplicate item identity within a category (positional dedupe check).
- Reports counts per category so you can eyeball totals before shipping.
