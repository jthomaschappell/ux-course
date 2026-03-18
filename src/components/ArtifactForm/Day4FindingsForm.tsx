import type {
  Day4Artifacts,
  UsabilityIssue,
  UsabilityTestEntry,
} from '../../types/progress';

const DEFAULT_ISSUE: UsabilityIssue = {
  friction: '',
  rootCauseHypothesis: '',
  severity: 'Medium',
  proposedChange: '',
};

interface Day4FindingsFormProps {
  artifacts: Day4Artifacts | undefined;
  onChange: (artifacts: Day4Artifacts) => void;
}

function ensureTwoTests(artifacts: Day4Artifacts | undefined): Day4Artifacts {
  const a = artifacts ?? [];
  const t1 = a[0] ?? { issues: [] };
  const t2 = a[1] ?? { issues: [] };
  return [
    { taskGiven: t1.taskGiven, issues: t1.issues.length > 0 ? t1.issues : [DEFAULT_ISSUE] },
    { taskGiven: t2.taskGiven, issues: t2.issues.length > 0 ? t2.issues : [DEFAULT_ISSUE] },
  ];
}

export function Day4FindingsForm({ artifacts, onChange }: Day4FindingsFormProps) {
  const tests = ensureTwoTests(artifacts);

  const updateTest = (testIdx: number, updates: Partial<UsabilityTestEntry>) => {
    const next = [...tests];
    next[testIdx] = { ...next[testIdx], ...updates };
    onChange(next);
  };

  const updateIssue = (
    testIdx: number,
    issueIdx: number,
    field: keyof UsabilityIssue,
    value: string | 'Low' | 'Medium' | 'High'
  ) => {
    const issues = [...(tests[testIdx]?.issues ?? [])];
    const issue = issues[issueIdx] ?? { ...DEFAULT_ISSUE };
    issues[issueIdx] = { ...issue, [field]: value };
    updateTest(testIdx, { issues });
  };

  const addIssue = (testIdx: number) => {
    const issues = [...(tests[testIdx]?.issues ?? []), { ...DEFAULT_ISSUE }];
    updateTest(testIdx, { issues });
  };

  const renderIssues = (test: UsabilityTestEntry, testIdx: number) =>
    test.issues.map((issue, issueIdx) => (
      <div key={issueIdx} className="issue-card">
        <h5>Issue {issueIdx + 1}</h5>
        <label>
          <span>Observed friction</span>
          <textarea
            value={issue.friction}
            onChange={(e) => updateIssue(testIdx, issueIdx, 'friction', e.target.value)}
            rows={2}
          />
        </label>
        <label>
          <span>Root cause hypothesis</span>
          <textarea
            value={issue.rootCauseHypothesis}
            onChange={(e) =>
              updateIssue(testIdx, issueIdx, 'rootCauseHypothesis', e.target.value)
            }
            rows={2}
          />
        </label>
        <label>
          <span>Severity</span>
          <select
            value={issue.severity}
            onChange={(e) =>
              updateIssue(testIdx, issueIdx, 'severity', e.target.value as UsabilityIssue['severity'])
            }
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>
        <label>
          <span>Proposed change</span>
          <textarea
            value={issue.proposedChange}
            onChange={(e) =>
              updateIssue(testIdx, issueIdx, 'proposedChange', e.target.value)
            }
            rows={2}
          />
        </label>
      </div>
    ));

  return (
    <div className="artifact-form-day4">
      <p className="script-note">
        Don&apos;t ask preference questions (e.g. &quot;Would you use this?&quot;). Focus on observed behavior and task completion.
      </p>
      {tests.map((test, i) => (
        <div key={i} className="test-card">
          <h4>Usability test {i + 1}</h4>
          <label>
            <span>Task given to participant</span>
            <input
              type="text"
              value={test.taskGiven ?? ''}
              onChange={(e) => updateTest(i, { taskGiven: e.target.value })}
              placeholder="e.g. Add a new project and invite a teammate"
            />
          </label>
          {renderIssues(test, i)}
          <button type="button" onClick={() => addIssue(i)}>
            + Add issue
          </button>
        </div>
      ))}
    </div>
  );
}
