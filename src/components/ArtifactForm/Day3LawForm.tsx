import type { Day3Artifacts, LawApplication } from '../../types/progress';

const DEFAULT_LAW: LawApplication = {
  screenName: '',
  whereRespected: '',
  whereViolated: '',
  improvement: '',
};

interface Day3LawFormProps {
  artifacts: Day3Artifacts | undefined;
  lawNames: string[];
  onChange: (artifacts: Day3Artifacts) => void;
}

export function Day3LawForm({ artifacts, lawNames, onChange }: Day3LawFormProps) {
  const laws: Day3Artifacts =
    artifacts ?? lawNames.map(() => ({ ...DEFAULT_LAW }));

  const update = (i: number, field: keyof LawApplication, value: string) => {
    const next = laws.map((l, j) =>
      j === i ? { ...l, [field]: value } : l
    ) as Day3Artifacts;
    onChange(next);
  };

  return (
    <div className="artifact-form-day3">
      {lawNames.map((name, i) => (
        <div key={i} className="law-card">
          <h4>{name}</h4>
          <label>
            <span>Name the screen or product</span>
            <input
              type="text"
              value={laws[i]?.screenName ?? ''}
              onChange={(e) => update(i, 'screenName', e.target.value)}
              placeholder="e.g. Gmail compose screen, Spotify home"
            />
          </label>
          <label>
            <span>Where it is respected</span>
            <textarea
              value={laws[i]?.whereRespected ?? ''}
              onChange={(e) => update(i, 'whereRespected', e.target.value)}
              placeholder="e.g. Large click target for primary action"
              rows={2}
            />
          </label>
          <label>
            <span>Where it is violated</span>
            <textarea
              value={laws[i]?.whereViolated ?? ''}
              onChange={(e) => update(i, 'whereViolated', e.target.value)}
              placeholder="e.g. Too many menu options at once"
              rows={2}
            />
          </label>
          <label>
            <span>What improvement would look like</span>
            <textarea
              value={laws[i]?.improvement ?? ''}
              onChange={(e) => update(i, 'improvement', e.target.value)}
              placeholder="e.g. Progressive disclosure for secondary options"
              rows={2}
            />
          </label>
        </div>
      ))}
    </div>
  );
}
