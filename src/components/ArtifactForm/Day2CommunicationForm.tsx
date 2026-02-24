import type { Day2Artifacts } from '../../types/progress';

interface Day2CommunicationFormProps {
  artifacts: Day2Artifacts | undefined;
  onChange: (artifacts: Day2Artifacts) => void;
}

export function Day2CommunicationForm({ artifacts, onChange }: Day2CommunicationFormProps) {
  const data = artifacts ?? { chosenCritiqueId: 0, notes: '' };

  return (
    <div className="artifact-form-day2">
      <label>
        <span>Which Day 1 critique did you present? (1, 2, or 3)</span>
        <select
          value={data.chosenCritiqueId}
          onChange={(e) =>
            onChange({ ...data, chosenCritiqueId: parseInt(e.target.value, 10) })
          }
        >
          <option value={0}>Critique 1</option>
          <option value={1}>Critique 2</option>
          <option value={2}>Critique 3</option>
        </select>
      </label>
      <label>
        <span>Notes (recording link, phrases replaced, etc.)</span>
        <textarea
          value={data.notes}
          onChange={(e) => onChange({ ...data, notes: e.target.value })}
          placeholder="Paste recording link, list phrases you replaced..."
          rows={4}
        />
      </label>
    </div>
  );
}
