# Flipped Class 1 — Expense Tracker & Budget Summary (Console‑First)

Build a logic‑first JavaScript expense tracker that demonstrates Days 1–3 skills: variables and types, operators, conditionals, loops, arrays, objects, debugging, and linking HTML to an external JS file. Console output is the product; UI is optional stretch.

## Learning Objectives
- Use variables, data types, and strict comparisons (`===`, `!==`).
- Apply `if/else` and logical operators (`&&`, `||`, `!`).
- Use `for` loops to iterate arrays of objects reliably.
- Model data with arrays of objects and update them predictably.
- Debug with `console.log`, reading errors, and breakpoints.
- Link `index.html` to `script.js` (external script).

## Deliverable
- A folder named `flipped-class-1-expense-tracker/` containing `index.html` and `script.js`.
- A console‑first expense tracker supporting: add expense, list expenses, list by category, totals by category, monthly summary, search.

## Getting Started (Workspace + VS Code)
- Create a workspace folder on your computer (e.g., `js-fundamentals-workspace/`) and open it in VS Code.
- Inside that workspace, create a folder named `flipped-class-1-expense-tracker/`.
- Inside it, create `index.html` and `script.js`.
- In `index.html`, include `<script src="script.js"></script>` before the closing `</body>` tag.
- Install VS Code Live Server: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
- In VS Code, right‑click `index.html` and choose “Open with Live Server”.
- Open the browser DevTools Console to view output and errors.

## Data Model (10 min)
- Represent each expense as an object: `id` (unique), `description` (non‑empty string), `amount` (number > 0), `category` (string), `date` (ISO string like `2025-09-30`).
- Store all expenses in an array named `expenses`.

## Core Functions (45–60 min)
Implement these in `script.js` (names must match). Do not change names.

- `listExpenses()`
  - Prints all expenses with readable formatting.
  - Expected line format: `🧾 (101) 2025-09-30 — Groceries — $12.50 — "Milk"`.

- `addExpense(description, amount, category, date)`
  - Validates inputs (non‑empty description/category, numeric amount > 0, valid date `YYYY-MM-DD`).
  - Appends a new expense object with unique `id` to `expenses`.

- `listByCategory(category)`
  - Prints only expenses in the given category.

- `totalByCategory(category)`
  - Computes and logs the total amount for the given category.
  - Expected: `Category: Groceries | Count: 3 | Total: $54.25`.

- `monthlySummary(month)`
  - `month` format: `YYYY-MM` (e.g., `2025-09`).
  - Logs total count and amount for that month, and the largest single expense.
  - Expected: `Month: 2025-09 | Count: 7 | Total: $230.00 | Largest: $48.00`.

Acceptance checks after each function:
- Call with realistic inputs to verify behavior.
- Use `console.log()` to trace values while developing, then tidy logs.

## Search and Filters (20–30 min)
- `searchExpenses(query)` — case‑insensitive substring match on `description`; prints matches in the same format as `listExpenses`.
- `listCategories()` — prints a unique list of categories present.

## Expected Output Examples
Example shapes (IDs and amounts will differ):

```
=== Expenses ===
🧾 (101) 2025-09-30 — Groceries — $12.50 — "Milk"
🧾 (102) 2025-09-30 — Transport — $3.00 — "Bus"
```

After `addExpense('Bread', 2.8, 'Groceries', '2025-09-30')` then `listByCategory('Groceries')`:

```
=== Category: Groceries ===
🧾 (101) 2025-09-30 — Groceries — $12.50 — "Milk"
🧾 (103) 2025-09-30 — Groceries — $2.80 — "Bread"
```

After `totalByCategory('Groceries')`:

```
Category: Groceries | Count: 2 | Total: $15.30
```

After `monthlySummary('2025-09')`:

```
Month: 2025-09 | Count: 5 | Total: $76.40 | Largest: $25.00
```

After `searchExpenses('mi')`:

```
=== Search: "mi" ===
🧾 (101) 2025-09-30 — Groceries — $12.50 — "Milk"
```

## Debugging Focus (ongoing)
- Read error messages; fix typos/missing symbols at indicated lines.
- Add `console.log()` before/after mutations to verify state.
- Use `debugger;` inside calculations to step through loops.
- Use `typeof` checks if comparisons behave unexpectedly.

## Stretch Goals (optional, 20–40 min)
- `removeExpense(id)` — delete by id with helpful message if not found.
- `budgetStatus(budgetAmount, month)` — compare monthly total to a budget; log under/over and percentage.
- Sorting helpers: `sortByAmount()` (high→low), `sortByDate()` (newest→oldest), `sortByCategory()` (A→Z).

## Milestones & Timeboxes
- M1 (30–40 min): `addExpense`, `listExpenses`, `listByCategory`.
- M2 (20–30 min): `totalByCategory`, `monthlySummary`, `searchExpenses`.
- M3 (optional): one or more stretch goals.

## Submission & Demo
- During class: demo console outputs for each milestone.
- Save in `flipped-class-1-expense-tracker/` in this repo or your own folder; push if you use Git.
- Pair review: swap for 5 minutes and test each other’s functions.

## Grading Rubric (formative)
- Must‑have: Array‑of‑objects data model; add/list/listByCategory/totals/monthly summary work; uses `===`, loops, and clear logs; no runtime errors on happy paths.
- Good: Search and categories list; input validation; helpful messages when nothing matches.
- Excellent: One+ stretch goals; tidy naming and structure; optional minimal DOM preview reflecting state.

## Hints
- Use strict equality (`===`/`!==`).
- Keep functions small; test immediately.
- Validate inputs: amount as number > 0, date format `YYYY-MM-DD`.
- Logs are breadcrumbs: add while exploring, then clean up.
