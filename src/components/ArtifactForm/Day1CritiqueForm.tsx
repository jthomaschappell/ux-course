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

  const fields: { key: keyof StructuredCritique; label: string }[] = [
    { key: 'primaryGoal', label: 'Primary User Goal' },
    { key: 'contextOfUse', label: 'Context of Use' },
    { key: 'cognitiveLoadSources', label: 'Cognitive Load Sources' },
    { key: 'heuristicViolations', label: 'Heuristic Violations' },
    { key: 'iaIssues', label: 'Information Architecture Issues' },
    { key: 'designHypothesis', label: 'Design Hypothesis' },
    { key: 'expectedImpact', label: 'Expected Measurable Impact' },
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
              placeholder="e.g. Linear, DrawFi, bad-website.com"
            />
          </label>
          {fields.map(({ key, label }) => (
            <label key={key}>
              <span>{label}</span>
              <textarea
                value={c[key]}
                onChange={(e) => update(i, key, e.target.value)}
                placeholder={
                  key === 'primaryGoal' ? 'e.g. Create and assign a task in under 30 seconds' :
                  key === 'expectedImpact' ? 'e.g. Higher completion rate, fewer errors' : label
                }
                rows={2}
              />
            </label>
          ))}
        </Card>
      ))}
    </div>
  );
}
