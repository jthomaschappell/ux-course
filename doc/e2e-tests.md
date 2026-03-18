# E2E Tests — 7-Day UX Fluency Plan

This document describes end-to-end test scenarios to run against the app. Use it for manual QA or as a spec for automated E2E (e.g. Playwright, Cypress).

**App entry:** Load the app at the dev URL (e.g. `http://localhost:5173` for Vite). Root element: `#root`.

---

## 1. App load & shell

| # | Scenario | Steps | Expected |
|---|----------|--------|----------|
| 1.1 | App loads | Open app URL | Page title "7-Day UX Fluency Plan"; hero shows "Build sharper UX judgment in one focused week."; Day 1 tab is active. |
| 1.2 | Main regions | — | Header with hero, progress bar, day tabs; main content with day intro, study, deliverable, tasks, artifacts; reference panel (collapsed). |

---

## 2. Day navigation (tabs)

| # | Scenario | Steps | Expected |
|---|----------|--------|----------|
| 2.1 | Switch day by click | Click "Day 2" tab | Day 2 content visible; tab has `aria-selected="true"`; panel `#panel-day2` is visible; Day 2 title and tasks shown. |
| 2.2 | Switch to Day 7 | Click "Day 7" tab | Day 7 content; artifact form shows Day 7 practice fields. |
| 2.3 | Keyboard: next day | Focus Day 1 tab, press Arrow Right | Day 2 selected and focused. |
| 2.4 | Keyboard: previous day | Focus Day 3 tab, press Arrow Left | Day 2 selected and focused. |
| 2.5 | Keyboard: no wrap | On Day 1, press Arrow Left; on Day 7, press Arrow Right | Focus stays on first/last tab; no wrap. |
| 2.6 | Tab badges | Navigate days | Each tab shows "done/total" badge (e.g. "0/4" for Day 1). |

---

## 3. Progress & header

| # | Scenario | Steps | Expected |
|---|----------|--------|----------|
| 3.1 | Course progress text | Load app | "Course progress: 0/24 tasks (0%)" in tab list area. |
| 3.2 | Progress bar | Complete 2 tasks on Day 1 | Progress bar width increases; percentage updates (e.g. 8%). |
| 3.3 | Live focus / next action | On Day 1 with no tasks done | Hero card: "Next action from Day 1", first task label, "Action pending", "Start next action" button. |
| 3.4 | Start next action (scroll) | Click "Start next action" | Main content scrolls to day panel; first incomplete task receives focus (`#task-<taskId>`). |
| 3.5 | Day complete state | Complete all tasks for current day | Hero: "Day complete", "Review artifacts" button. Click scrolls to artifacts section. |
| 3.6 | Progress zone label | 0% vs 70%+ | At 0%: "Amber zone"; at 70%+: "Green zone". |

---

## 4. Task list

| # | Scenario | Steps | Expected |
|---|----------|--------|----------|
| 4.1 | Tasks visible | Go to Day 1 | "Tasks" heading; list of 4 tasks (study, critique1, critique2, critique3). |
| 4.2 | Toggle task done | Check first task | Task shows as done; tab badge for Day 1 updates (e.g. 1/4); course progress updates. |
| 4.3 | Toggle task undone | Uncheck the same task | Task unchecked; badges and progress decrease. |
| 4.4 | Persistence | Check 2 tasks, refresh page | Same 2 tasks still checked; progress preserved (localStorage). |
| 4.5 | Per-day tasks | Switch to Day 2 | Day 2 tasks (pick, record, refine); progress independent from Day 1. |
| 4.6 | Day meta | On any day | "X/Y tasks complete" in day intro matches checked count. |

---

## 5. Artifact forms (per day)

| # | Scenario | Steps | Expected |
|---|----------|--------|----------|
| 5.1 | Day 1 — critiques | Day 1, "Your artifacts" | 3 critique cards; each has Target + 7 fields (Primary User Goal, Context of Use, etc.). |
| 5.2 | Day 1 — fill & persist | Fill one field in Critique 1, refresh | Value still present. |
| 5.3 | Day 2 — form | Switch to Day 2 | Chosen critique selector + notes field. |
| 5.4 | Day 3 — laws | Switch to Day 3 | 5 law applications (Fitts's, Hick's, Progressive Disclosure, Recognition vs Recall, Error Prevention); each: where respected, violated, improvement. |
| 5.5 | Day 4 — findings | Switch to Day 4 | Usability findings (e.g. issues list with friction, root cause, severity, proposed change). |
| 5.6 | Day 5 — Figma | Switch to Day 5 | Learnings checklist + recreate notes. |
| 5.7 | Day 6 — case study | Switch to Day 6 | Problem framing, assumptions, observed friction, redesign notes, before/after, KPI impact. |
| 5.8 | Day 7 — practice | Switch to Day 7 | Four answer fields + pushback notes. |
| 5.9 | Artifacts persist across days | Fill Day 1 and Day 3, switch days and refresh | Day 1 and Day 3 artifact data still present. |

---

## 6. Reference panel

| # | Scenario | Steps | Expected |
|---|----------|--------|----------|
| 6.1 | Toggle open | Click "+ Reference & resources" | Panel opens; button text "− Hide reference"; sections: Goal by Day 7, Reference resources, Mental model, Outcome. |
| 6.2 | Toggle closed | Click "− Hide reference" | Panel closes; button "+ Reference & resources". |
| 6.3 | Accessibility | — | Toggle has `aria-expanded` true when open, false when closed. |

---

## 7. Accessibility & UX

| # | Scenario | Steps | Expected |
|---|----------|--------|----------|
| 7.1 | Tab panel link | — | Active tab has `aria-controls="panel-<dayId>"`; panel has `role="tabpanel"` and `aria-labelledby="tab-<dayId>"`. |
| 7.2 | Tablist | — | Day tabs container has `role="tablist"`, `aria-label="Course days"`. |
| 7.3 | Progress announcement | Change task completion | "Course progress: X/Y tasks (Z%)" in an `aria-live="polite"` region so AT announces updates. |
| 7.4 | Focus management | "Start next action" with incomplete task | Focus moves to next incomplete task checkbox/label. |

---

## 8. Responsive / viewport (optional)

| # | Scenario | Steps | Expected |
|---|----------|--------|----------|
| 8.1 | Narrow viewport | Resize to ~375px | Layout readable; tabs and content usable without horizontal scroll (or scroll is acceptable). |
| 8.2 | Reference panel on small screen | Open reference on mobile width | Content visible and not cut off. |

---

## Manual QA checklist (quick pass)

- [ ] Load app; Day 1 visible, progress 0%.
- [ ] Click Day 2 → Day 2 content and artifact form.
- [ ] Arrow Left/Right between days.
- [ ] Check/uncheck tasks; progress and badges update; refresh preserves state.
- [ ] Fill one Day 1 artifact field; refresh preserves it.
- [ ] Open Reference panel; close it.
- [ ] "Start next action" scrolls and focuses next task.
- [ ] Complete all Day 1 tasks → "Review artifacts" appears; click scrolls to artifacts.

---

## Notes for automation

- **Selectors:** Prefer `role` + `name` or `aria-label` where available. Fallbacks: `#panel-day1`, `#tab-day1`, `#task-study`, `#artifacts`, `.reference-toggle`, `.hero-action-cta`.
- **Persistence:** Clear `localStorage` (or use a clean profile) between tests that assert initial state.
- **Stability:** Wait for tab panel visibility and (if needed) network idle after load before asserting content.
