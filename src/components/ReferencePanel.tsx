import { useState } from 'react';
import {
  REFERENCE_RESOURCES,
  MENTAL_MODEL,
  OUTCOME,
  GOAL_BY_DAY_7,
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
                <li key={i}>{g}</li>
              ))}
            </ul>
          </section>
          <section>
            <h3>Reference resources (free)</h3>
            <ul>
              {REFERENCE_RESOURCES.map((r, i) => (
                <li key={i}>
                  <strong>{r.name}</strong> {r.desc && `— ${r.desc}`}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h3>Mental model for speaking UX</h3>
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
