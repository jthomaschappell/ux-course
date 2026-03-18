import type { Day6Artifacts } from '../../types/progress';

const FIELDS: { key: keyof Day6Artifacts; label: string; placeholder?: string }[] = [
  { key: 'problemFraming', label: '1. Problem framing' },
  { key: 'assumptions', label: '2. Assumptions' },
  { key: 'observedFriction', label: '3. Observed friction' },
  { key: 'redesignNotes', label: '4. Redesign (in Figma)', placeholder: 'View-only Figma link + short description of changes' },
  { key: 'beforeAfterComparison', label: '5. Before/after comparison' },
  { key: 'expectedKpiImpact', label: '6. Expected KPI impact', placeholder: 'e.g. Completion rate up 15%; time on task down 20%' },
];

interface Day6CaseStudyFormProps {
  artifacts: Day6Artifacts | undefined;
  onChange: (artifacts: Day6Artifacts) => void;
}

export function Day6CaseStudyForm({ artifacts, onChange }: Day6CaseStudyFormProps) {
  const data: Day6Artifacts = artifacts ?? {
    problemFraming: '',
    assumptions: '',
    observedFriction: '',
    redesignNotes: '',
    beforeAfterComparison: '',
    expectedKpiImpact: '',
  };

  const update = (key: keyof Day6Artifacts, value: string) => {
    onChange({ ...data, [key]: value });
  };

  return (
    <div className="artifact-form-day6">
      {FIELDS.map(({ key, label, placeholder }) => (
        <label key={key}>
          <span>{label}</span>
          <textarea
            value={data[key]}
            onChange={(e) => update(key, e.target.value)}
            placeholder={placeholder ?? label}
            rows={3}
          />
        </label>
      ))}
    </div>
  );
}
