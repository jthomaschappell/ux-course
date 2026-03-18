# AGENTS.md

## Cursor Cloud specific instructions

This is a React + Vite + TypeScript single-page application ("7-Day UX Fluency Plan"). No backend, no database, no Docker — all state is persisted in browser `localStorage` (key: `ux-course-v1`).

### Services

| Service | Command | URL |
|---|---|---|
| Dev server | `npm run dev` | http://localhost:5173 |

### Key commands

See `package.json` `scripts` for the canonical list:
- **Dev server:** `npm run dev`
- **Build (TypeScript + Vite):** `npm run build`
- **Lint:** `npm run lint`
- **Preview production build:** `npm run preview`

### Notes

- **Pre-existing lint errors:** `npm run lint` currently reports 1 error and 1 warning in `src/components/EditableStudyDeliverable.tsx` (setState-in-effect and missing useEffect deps). These are in the existing codebase and not introduced by setup.
- **No automated tests:** The repo has no test runner or test files. Manual QA scenarios are documented in `doc/e2e-tests.md` and `README.md`.
- **No `.env` required:** The app has no environment variables or secrets.
