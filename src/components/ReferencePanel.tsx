import { useState } from 'react';
import {
  REFERENCE_RESOURCES,
  MENTAL_MODEL,
  MENTAL_MODEL_ONE_LINER,
  OUTCOME,
  GOAL_BY_DAY_7,
  GOAL_TO_DAYS,
  SEVERITY_DEFINITIONS,
  INTERVIEW_FORMULA,
} from '../data/days';

export function ReferencePanel() {
  const [open, setOpen] = useState(false);

  return (
    <aside className={`reference-panel ${open ? 'open' : ''}`}>
      <button
        type="button"
        className="reference-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {open ? '− Hide reference' : '+ Reference & resources'}
      </button>
      {open && (
        <div className="reference-content">
          <section>
            <h3>Goal by Day 7</h3>
            <ul>
              {GOAL_BY_DAY_7.map((g, i) => (
                <li key={i}>
                  {g}
                  {GOAL_TO_DAYS[g] != null && (
                    <span className="goal-days"> — {GOAL_TO_DAYS[g]}</span>
                  )}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h3>Reference resources (free)</h3>
            <ul>
              {REFERENCE_RESOURCES.map((r, i) => (
                <li key={i}>
                  {r.url ? (
                    <a href={r.url} target="_blank" rel="noopener noreferrer">
                      <strong>{r.name}</strong>
                    </a>
                  ) : (
                    <strong>{r.name}</strong>
                  )}
                  {r.desc && ` — ${r.desc}`}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h3>Mental model for speaking UX</h3>
            <p className="mental-model-oneliner">{MENTAL_MODEL_ONE_LINER}</p>
            <pre>{MENTAL_MODEL}</pre>
          </section>
          <section>
            <h3>Severity (usability findings)</h3>
            <pre>{SEVERITY_DEFINITIONS}</pre>
          </section>
          <section>
            <h3>Interview answer formula</h3>
            <pre>{INTERVIEW_FORMULA}</pre>
          </section>
          <section>
            <h3>Outcome of this plan</h3>
            <pre>{OUTCOME}</pre>
          </section>
        </div>
      )}
    </aside>
  );
}
