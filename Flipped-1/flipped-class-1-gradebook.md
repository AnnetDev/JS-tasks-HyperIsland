# Flipped Class 1 — Gradebook & Analytics (Console‑First)

Build a logic‑first JavaScript gradebook that demonstrates Days 1–3 skills: variables and types, operators, conditionals, loops, arrays, objects, debugging, and linking HTML to an external JS file. Console output is the product; UI is optional stretch.

## Learning Objectives
- Use variables, data types, and strict comparisons (`===`, `!==`).
- Apply `if/else` and logical operators (`&&`, `||`, `!`).
- Use `for` loops to iterate arrays of objects reliably.
- Model data with nested structures (array of students, each with an array of grades).
- Debug with `console.log`, reading errors, and breakpoints.
- Link `index.html` to `script.js` (external script).

## Deliverable
- A folder named `flipped-class-1-gradebook/` containing `index.html` and `script.js`.
- A console‑first gradebook that supports: list, add student, add grade, per‑student average, class summary, filtering/search.

## Getting Started (Workspace + VS Code)
- Create a workspace folder on your computer (e.g., `js-fundamentals-workspace/`) and open it in VS Code.
- Inside that workspace, create a folder named `flipped-class-1-gradebook/`.
- Inside it, create `index.html` and `script.js`.
- In `index.html`, include `<script src="script.js"></script>` before the closing `</body>` tag.
- Install VS Code Live Server: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
- In VS Code, right‑click `index.html` and choose “Open with Live Server”.
- Open the browser DevTools Console to view output and errors.

## Data Model (10 min)
- Represent each student as an object with fields: `id` (unique), `name` (non‑empty string), `grades` (array of numbers 0–100).
- Store all students in an array named `students`.

## Core Functions (45–60 min)
Implement these in `script.js` (names must match). Do not change names.

- `listStudents()`
  - Prints all students with their average and grade count.
  - Expected line format per item: `👩‍🎓 (101) Alex — avg: 78 (3 grades)`.

- `addStudent(name)`
  - Validates input (reject empty/whitespace‑only name).
  - Creates a new student `{ id, name, grades: [] }` and appends to `students`.

- `addGrade(id, score)`
  - Validates that `score` is a number between 0 and 100 (inclusive).
  - Appends the grade to the correct student’s `grades` array.
  - If student not found, logs a helpful message.

- `studentAverage(id)`
  - Calculates and returns the average for a single student (0 if no grades).
  - Also logs a readable message: `Alex — avg: 78 from 3 grades`.

- `classSummary()`
  - Logs: total students, total grades, class average (across all grades), highest grade, lowest grade.
  - Expected summary format: `Students: 3 | Grades: 7 | Class avg: 74 | High: 98 | Low: 52`.

Acceptance checks after each function:
- Call with realistic inputs to verify behavior.
- Use `console.log()` to trace values; clean up noisy logs when stable.

## Filtering and Search (20–30 min)
- `listAtRisk(threshold)` — prints students whose average is below `threshold`.
- `searchStudents(query)` — case‑insensitive substring match on `name`; prints matches in the same format as `listStudents`.

## Expected Output Examples
Example shapes (IDs and values will differ):

```
=== Students ===
👩‍🎓 (101) Alex — avg: 72 (2 grades)
👨‍🎓 (102) Maya — avg: 85 (3 grades)
```

After `addStudent('Sam')` then `listStudents()`:

```
=== Students ===
👩‍🎓 (101) Alex — avg: 72 (2 grades)
👨‍🎓 (102) Maya — avg: 85 (3 grades)
👨‍🎓 (103) Sam — avg: 0 (0 grades)
```

After `addGrade(103, 90)` and `studentAverage(103)`:

```
Sam — avg: 90 from 1 grades
```

After `classSummary()`:

```
Students: 3 | Grades: 6 | Class avg: 82 | High: 98 | Low: 60
```

After `listAtRisk(70)`:

```
=== At Risk (< 70) ===
👩‍🎓 (101) Alex — avg: 65 (3 grades)
```

After `searchStudents('ma')`:

```
=== Search: "ma" ===
👨‍🎓 (102) Maya — avg: 85 (3 grades)
```

## Debugging Focus (ongoing)
- Read error messages; fix typos/missing symbols at indicated lines.
- Add `console.log()` before/after mutations to verify state.
- Use `debugger;` in `studentAverage` or `classSummary` to step through loops.
- Use `typeof` checks if comparisons behave unexpectedly.

## Stretch Goals (optional, 20–40 min)
- `topN(n)` — print the top `n` students by average (handle ties reasonably).
- `gradeDistribution()` — bucket counts for `[90–100] [80–89] ... [0–59]` and print a summary line.
- `removeStudent(id)` and/or `removeGrade(id, index)` (guard against invalid indices).
- Sorting helpers: `sortByAverage()` (high→low), `sortByName()` (A→Z).

## Milestones & Timeboxes
- M1 (30–40 min): `addStudent`, `listStudents`, `addGrade` for at least 3 students; `studentAverage` returns sensible values.
- M2 (20–30 min): `classSummary` + `listAtRisk` + `searchStudents`.
- M3 (optional): one or more stretch goals.

## Submission & Demo
- During class: demo console outputs for each milestone.
- Save in `flipped-class-1-gradebook/` in this repo or your own folder; push if you use Git.
- Pair review: swap for 5 minutes and test each other’s functions.

## Grading Rubric (formative)
- Must‑have: Array‑of‑objects data model with nested `grades`; add/list/add‑grade/averages/summary work; uses `===`, loops, and clear logs; no runtime errors on happy paths.
- Good: `listAtRisk`, `searchStudents`, input validation, helpful messages for unknown IDs/invalid scores.
- Excellent: One+ stretch goals; tidy naming and structure; optional minimal DOM preview reflecting state.

## Hints
- Use strict equality (`===`/`!==`).
- Keep functions small; test immediately.
- Guard inputs: names (non‑empty), scores (0–100 numbers).
- Logs are breadcrumbs: add while exploring, then clean up.
