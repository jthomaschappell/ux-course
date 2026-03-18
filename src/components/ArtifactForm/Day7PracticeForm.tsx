import type { Day7Artifacts } from '../../types/progress';
import { INTERVIEW_FORMULA } from '../../data/days';

const QUESTIONS = [
  { key: 'approachAnswer' as const, label: 'How do you approach UX?' },
  { key: 'validateAnswer' as const, label: 'How do you validate design assumptions?' },
  { key: 'balanceAnswer' as const, label: 'How do you balance business goals and usability?' },
  { key: 'improvementAnswer' as const, label: 'Tell me about a UX improvement you made.' },
];

interface Day7PracticeFormProps {
  artifacts: Day7Artifacts | undefined;
  onChange: (artifacts: Day7Artifacts) => void;
}

export function Day7PracticeForm({ artifacts, onChange }: Day7PracticeFormProps) {
  const data: Day7Artifacts = artifacts ?? {
    approachAnswer: '',
    validateAnswer: '',
    balanceAnswer: '',
    improvementAnswer: '',
    pushbackNotes: '',
  };

  const update = (key: keyof Day7Artifacts, value: string) => {
    onChange({ ...data, [key]: value });
  };

  return (
    <div className="artifact-form-day7">
      <p className="formula-reminder">
        Use: {INTERVIEW_FORMULA}
      </p>
      {QUESTIONS.map(({ key, label }) => (
        <label key={key}>
          <span>{label}</span>
          <textarea
            value={data[key]}
            onChange={(e) => update(key, e.target.value)}
            placeholder={label}
            rows={3}
          />
        </label>
      ))}
      <label>
        <span>Pushback responses</span>
        <p className="pushback-prompts">
          Practice responding to: &quot;Stakeholders disagree.&quot; / &quot;Research conflicts with revenue.&quot; / &quot;We don&apos;t have time for testing.&quot;
        </p>
        <textarea
          value={data.pushbackNotes}
          onChange={(e) => update('pushbackNotes', e.target.value)}
          placeholder="Write your response for each scenario. Use evidence and the formula: constraint → tradeoff → outcome."
          rows={5}
        />
      </label>
    </div>
  );
}
