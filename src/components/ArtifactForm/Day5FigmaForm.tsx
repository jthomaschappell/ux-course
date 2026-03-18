import type { Day5Artifacts } from '../../types/progress';
import { Checkbox } from '../Checkbox';

interface Day5FigmaFormProps {
  artifacts: Day5Artifacts | undefined;
  learnings: string[];
  onChange: (artifacts: Day5Artifacts) => void;
}

export function Day5FigmaForm({
  artifacts,
  learnings,
  onChange,
}: Day5FigmaFormProps) {
  const defaultLearnings = Object.fromEntries(learnings.map((l) => [l, false]));
  const data = artifacts ?? {
    learnings: defaultLearnings,
    recreateNotes: '',
  };
  const mergedLearnings = { ...defaultLearnings, ...data.learnings };

  const updateLearning = (key: string, checked: boolean) => {
    onChange({
      ...data,
      learnings: { ...data.learnings, [key]: checked },
    });
  };

  return (
    <div className="artifact-form-day5">
      <div className="learnings-checklist">
        <h4>Learnings checklist</h4>
        {learnings.map((item) => (
          <Checkbox
            key={item}
            id={`learn-${item}`}
            checked={!!mergedLearnings[item]}
            onChange={(v) => updateLearning(item, v)}
            label={item}
          />
        ))}
      </div>
      <label>
        <span>Recreate one screen (notes, Figma link)</span>
        <textarea
          value={data.recreateNotes}
          onChange={(e) =>
            onChange({ ...data, recreateNotes: e.target.value })
          }
          placeholder="Paste view-only Figma link, then notes on spacing, hierarchy, and components..."
          rows={4}
        />
      </label>
    </div>
  );
}
