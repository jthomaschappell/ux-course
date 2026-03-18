# E2E Test Run Results

Run date: 2026-03-18. Manual run against `npm run dev` (http://localhost:5173) using browser automation.

**Note:** The test spec lives in the main repo at `doc/e2e-tests.md`. This file records results for the current worktree app.

---

## 1. App load & shell

| #   | Scenario     | Result | Notes |
|-----|--------------|--------|--------|
| 1.1 | App loads    | **Partial** | Page title "7-Day UX Fluency Plan" ✓; Day 1 tab active ✓. **Missing:** Hero text "Build sharper UX judgment in one focused week." — app shows course intro + day meta instead. |
| 1.2 | Main regions | **Partial** | Header with day tabs ✓; main content (intro, study, deliverable, tasks, artifacts) ✓; reference panel collapsed ✓. **Missing:** Progress bar; hero card. |

---

## 2. Day navigation (tabs)

| #   | Scenario           | Result | Notes |
|-----|--------------------|--------|--------|
| 2.1 | Switch day by click| **PASS** | Day 2 content and artifact form visible; tab `aria-selected="true"`; Day 2 title and tasks shown. |
| 2.2 | Switch to Day 7    | **PASS** | Day 7 content; four answer fields + pushback notes visible. |
| 2.3 | Keyboard: next day | **Partial** | Arrow Right from Day 1 selects Day 2; focus did not move to Day 2 tab (focus stayed on Day 1). |
| 2.4 | Keyboard: previous day | **Not run** | — |
| 2.5 | Keyboard: no wrap | **Not run** | — |
| 2.6 | Tab badges        | **PASS** | Each tab shows "done/total" (e.g. "0/4" for Day 1). |

---

## 3. Progress & header

| #   | Scenario            | Result | Notes |
|-----|---------------------|--------|--------|
| 3.1 | Course progress text| **Partial** | Shows "0 / 24 tasks" (no "Course progress:" label, no percentage). |
| 3.2 | Progress bar        | **N/A** | No progress bar in app. |
| 3.3 | Live focus / next action | **N/A** | No hero card or "Next action from Day 1" / "Start next action" button. |
| 3.4 | Start next action (scroll) | **N/A** | — |
| 3.5 | Day complete state  | **N/A** | No "Day complete" / "Review artifacts" in current UI. |
| 3.6 | Progress zone label | **N/A** | No "Amber zone" / "Green zone". |

---

## 4. Task list

| #   | Scenario      | Result | Notes |
|-----|---------------|--------|--------|
| 4.1 | Tasks visible | **PASS** | Day 1: "Tasks" heading; 4 tasks (study, critique1, critique2, critique3). |
| 4.2 | Toggle task done  | **Blocked** | Fixed reference bar at bottom intercepted click on task checkbox (viewport/layout issue). |
| 4.3 | Toggle task undone| **Not run** | — |
| 4.4 | Persistence    | **Not run** | — |
| 4.5 | Per-day tasks | **PASS** | Day 2 shows 3 tasks (pick, record, refine); independent from Day 1. |
| 4.6 | Day meta      | **Partial** | Day shows objective, ~X min, "One thing to nail today" — not "X/Y tasks complete" in intro. |

---

## 5. Artifact forms (per day)

| #   | Scenario        | Result | Notes |
|-----|-----------------|--------|--------|
| 5.1 | Day 1 — critiques | **PASS** | 3 critique cards; Target + 7 fields each. |
| 5.2 | Day 1 — fill & persist | **Not run** | (Assumed working from existing localStorage behavior.) |
| 5.3 | Day 2 — form   | **PASS** | Chosen critique selector + notes field. |
| 5.4 | Day 3 — laws   | **Not run** | Doc expects 5 laws with respected/violated/improvement — structure present in code. |
| 5.5 | Day 4 — findings| **Not run** | Doc expects task + issues (friction, root cause, severity, proposed change) — form has task field + issues. |
| 5.6 | Day 5 — Figma  | **Not run** | — |
| 5.7 | Day 6 — case study | **Not run** | — |
| 5.8 | Day 7 — practice| **PASS** | Four answer fields + pushback notes; formula reminder visible. |
| 5.9 | Artifacts persist across days | **Not run** | — |

---

## 6. Reference panel

| #   | Scenario   | Result | Notes |
|-----|------------|--------|--------|
| 6.1 | Toggle open  | **PASS** | Button "− Hide reference"; sections: Goal by Day 7 (with day mapping), Reference resources (with links), Mental model, Severity, Interview formula, Outcome. |
| 6.2 | Toggle closed| **PASS** | Button "+ Reference & resources". |
| 6.3 | Accessibility| **PASS** | Toggle has `aria-expanded` true when open, false when closed. |

---

## 7. Accessibility & UX

| #   | Scenario         | Result | Notes |
|-----|------------------|--------|--------|
| 7.1 | Tab panel link   | **PASS** | Active tab has `aria-controls="panel-day1"`; panel has `role="tabpanel"` and `aria-labelledby`. |
| 7.2 | Tablist          | **PASS** | Container has `role="tablist"`, `aria-label="Course days"`. |
| 7.3 | Progress announcement | **Partial** | Progress text in `aria-live="polite"` region ✓; doc expects "Course progress: X/Y tasks (Z%)" — current is "X / Y tasks". |
| 7.4 | Focus management | **N/A** | No "Start next action" button. |

---

## 8. Responsive / viewport (optional)

| #   | Scenario | Result | Notes |
|-----|----------|--------|--------|
| 8.1 | Narrow viewport | **Not run** | — |
| 8.2 | Reference panel on small screen | **Issue** | Fixed reference bar can cover content and intercept clicks (e.g. task checkboxes). |

---

## Summary

- **Passed:** App load (title, Day 1); day navigation (click Day 2, Day 7); tab badges; tablist/tab panel ARIA; reference panel open/close and `aria-expanded`; Day 1 and Day 2 and Day 7 artifact forms; per-day tasks.
- **Partial / Different:** No hero line "Build sharper UX judgment..."; no progress bar or percentage; no "Course progress:" label; keyboard Arrow Right selects next day but focus doesn’t move to new tab; day meta shows objective/estimate/one thing, not "X/Y tasks complete".
- **Not in app (doc may be ahead of implementation):** Hero card, progress bar, "Start next action", "Day complete" / "Review artifacts", Amber/Green zone.
- **Bug / UX:** Fixed reference bar at bottom can overlap main content and block clicks on tasks on some viewports.

---

## How to re-run

1. From worktree: `npm install && npm run dev`
2. Open http://localhost:5173
3. Follow scenarios in main repo `doc/e2e-tests.md` (manual or automate with Playwright/Cypress).
