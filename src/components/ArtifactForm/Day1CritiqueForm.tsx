import type { Day1Artifacts, StructuredCritique } from '../../types/progress';
import { Card } from '../Card';

const DEFAULT_CRITIQUE: StructuredCritique = {
  target: '',
  primaryGoal: '',
  contextOfUse: '',
  cognitiveLoadSources: '',
  heuristicViolations: '',
  iaIssues: '',
  designHypothesis: '',
  expectedImpact: '',
};

interface Day1CritiqueFormProps {
  artifacts: Day1Artifacts | undefined;
  targets: string[];
  onChange: (artifacts: Day1Artifacts) => void;
}

export function Day1CritiqueForm({ artifacts, targets, onChange }: Day1CritiqueFormProps) {
  const crits: Day1Artifacts = artifacts ?? [
    { ...DEFAULT_CRITIQUE, target: targets[0] ?? '' },
    { ...DEFAULT_CRITIQUE, target: targets[1] ?? '' },
    { ...DEFAULT_CRITIQUE, target: targets[2] ?? '' },
  ];

  const update = (i: number, field: keyof StructuredCritique, value: string) => {
    const next = [...crits] as Day1Artifacts;
    next[i] = { ...next[i], [field]: value };
    onChange(next);
  };

  const fields: { key: keyof StructuredCritique; label: string; placeholder: string }[] = [
    { key: 'primaryGoal', label: 'Primary User Goal', placeholder: 'e.g. Complete a task in under 2 steps' },
    { key: 'contextOfUse', label: 'Context of Use', placeholder: 'Context of Use' },
    { key: 'cognitiveLoadSources', label: 'Cognitive Load Sources', placeholder: 'Cognitive Load Sources' },
    { key: 'heuristicViolations', label: 'Heuristic Violations', placeholder: 'Heuristic Violations' },
    { key: 'iaIssues', label: 'Information Architecture Issues', placeholder: 'Information Architecture Issues' },
    { key: 'designHypothesis', label: 'Design Hypothesis', placeholder: 'Design Hypothesis' },
    { key: 'expectedImpact', label: 'Expected Measurable Impact', placeholder: 'e.g. Reduce time-on-task by 20%' },
  ];

  return (
    <div className="artifact-form-day1">
      {crits.map((c, i) => (
        <Card key={i} className="critique-card">
          <h4>Critique {i + 1}: {targets[i] ?? `Target ${i + 1}`}</h4>
          <label>
            <span>Target</span>
            <input
              type="text"
              value={c.target}
              onChange={(e) => update(i, 'target', e.target.value)}
              placeholder="e.g. Linear, your app, bad-website.com"
            />
          </label>
          {fields.map(({ key, label, placeholder }) => (
            <label key={key}>
              <span>{label}</span>
              <textarea
                value={c[key]}
                onChange={(e) => update(i, key, e.target.value)}
                placeholder={placeholder}
                rows={2}
              />
            </label>
          ))}
        </Card>
      ))}
    </div>
  );
}
