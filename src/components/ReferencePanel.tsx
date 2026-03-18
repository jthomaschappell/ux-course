import { useState } from 'react';
import {
  REFERENCE_RESOURCES,
  MENTAL_MODEL,
  MENTAL_MODEL_ONE_LINER,
  OUTCOME,
  GOAL_BY_DAY_7,
  SEVERITY_DEFINITIONS,
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
                  {g.goal} <span className="goal-days">({g.days})</span>
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
                    <a href={r.url} target="_blank" rel="noopener noreferrer">{r.name}</a>
                  ) : (
                    <strong>{r.name}</strong>
                  )}
                  {r.desc && ` — ${r.desc}`}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h3>Severity (usability findings)</h3>
            <ul>
              {Object.entries(SEVERITY_DEFINITIONS).map(([level, def]) => (
                <li key={level}><strong>{level}:</strong> {def}</li>
              ))}
            </ul>
          </section>
          <section>
            <h3>Mental model for speaking UX</h3>
            <p className="mental-model-one-liner">{MENTAL_MODEL_ONE_LINER}</p>
            <pre>{MENTAL_MODEL}</pre>
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
