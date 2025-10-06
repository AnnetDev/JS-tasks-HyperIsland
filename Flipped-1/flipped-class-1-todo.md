# Flipped Class 1 — Logic-First Mini App

Build a small, logic-first JavaScript app that demonstrates Days 1–3 skills: variables and types, operators, conditionals, loops, arrays, objects, debugging, and linking HTML to an external JS file. Deliver a console-driven “Todo & Stats” app with clear outputs. Do not focus on UI.

## Learning Objectives

- Use variables, data types, and strict comparisons (`===`, `!==`).
- Apply `if/else` and logical operators (`&&`, `||`, `!`) to control flow.
- Use `for` loops to iterate arrays reliably.
- Model data with arrays of objects and update them predictably.
- Debug with `console.log`, reading errors, and breakpoints.
- Link `index.html` to `script.js` (external script).

## Deliverable

- A folder named `flipped-class-1/` containing `index.html` and `script.js`.
- A console-first Todo app that supports: list, add, toggle, remove, summary, and basic filtering/search.

## Getting Started (Workspace + VS Code)

- Create a workspace folder on your computer (e.g., `js-fundamentals-workspace/`) and open it in VS Code.
- Inside that workspace, create a folder for this assignment named `flipped-class-1/`.
- Inside `flipped-class-1/`, create two files: `index.html` and `script.js`.
- In `index.html`, include `<script src="script.js"></script>` before the closing `</body>` tag.
- Install VS Code Live Server: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
- In VS Code, right‑click `index.html` and choose “Open with Live Server”.
- Open the browser DevTools Console to view output and errors.

## Data Model (10 min)

- Represent each todo as an object with fields: `id` (unique), `text` (non-empty string), `completed` (boolean).
- Store all todos in an array named `todos`.

## Core Functions (45–60 min)

Implement these in `script.js` (names must match). Do not change names.

- `listTodos()`

  - Prints all todos to the console in a consistent, readable format.
  - Expected line format per item: `✅ (123) Walk dog` or `⬜️ (123) Walk dog`.

- `addTodo(text)`

  - Validates input (reject empty/whitespace-only text).
  - Creates a new todo with a unique `id` and `completed: false` and appends to `todos`.

- `toggleTodo(id)`

  - Finds a todo by `id` and flips its `completed` status.
  - If not found, logs a helpful message (e.g., `No todo found with id 999`).

- `removeTodo(id)`

  - Removes the todo with the given `id` without breaking other items.
  - If no item is removed, logs a helpful message.

- `printSummary()`
  - Logs total, completed, pending counts, and a completion percentage (rounded).
  - Expected summary format: `Total: 3 | Done: 1 | Pending: 2 | 33% complete`.

Acceptance checks after each function:

- Call the function with realistic inputs to verify behavior.
- Use `console.log()` to trace values while developing, then tidy logs.

## Filtering and Search (20–30 min)

- `listCompleted()` — prints only completed todos.
- `searchTodos(query)` — case-insensitive substring match against `text`; prints matches in the same format as `listTodos`.

## Expected Output Examples

Example shapes (IDs will differ):

```
=== Todos ===
⬜️ (101) Buy milk
✅ (102) Walk dog
```

After adding a new todo and listing again:

```
=== Todos ===
⬜️ (101) Buy milk
✅ (102) Walk dog
⬜️ (103) Read book
```

After toggling and printing summary:

```
Total: 3 | Done: 2 | Pending: 1 | 67% complete
```

Search and completed views:

```
=== Search: "bo" ===
⬜️ (103) Read book

=== Completed ===
✅ (101) Buy milk
✅ (102) Walk dog
```

## Debugging Focus (ongoing)

- Read error messages; fix typos/missing symbols at indicated lines.
- Add `console.log()` before/after mutations to verify state.
- Use `debugger;` inside `toggleTodo` and step through in DevTools.
- Use `typeof` checks if comparisons behave unexpectedly.

## Stretch Goals (optional, 20–40 min)

- Sorting helpers: `sortByCompleted()` (pending first), `sortByText()` (A→Z).
- Input guard: reject duplicate `text` (case-insensitive).
- Minimal DOM preview: render a list `<ul id="todos"></ul>` with items within `<li>` elements, based on `todos` (no event wiring required).

## Milestones & Timeboxes

- M1 (30–40 min): `listTodos`, `addTodo`, `toggleTodo` with 3–4 todos; `printSummary` shows counts.
- M2 (20–30 min): `removeTodo` + `listCompleted` + `searchTodos`.
- M3 (optional): one or more stretch goals.

## Submission & Demo

- During class: demo console outputs for each milestone.
- Save in `flipped-class-1/` in this repo or your own folder.
- Pair review: swap for 5 minutes and test each other’s functions.

## Grading Rubric (formative)

- Must-have: Array-of-objects data model; `add/toggle/remove/list/summary` work; use `===`, loops, and clear logs; no runtime errors on happy paths.
- Good: `listCompleted`, `searchTodos`, input validation, helpful messages for unknown IDs.
- Excellent: One or more stretch goals; tidy naming and structure; minimal DOM preview that reflects state.

## Hints

- Use strict equality (`===`/`!==`).
- Keep functions small; test immediately.
- Off-by-one in loops? Check indices and `.length - 1`.
- Logs are breadcrumbs: add while exploring, then clean up.
