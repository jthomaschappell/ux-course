import type { Day } from '../../types/course';
import type { Artifacts } from '../../types/progress';
import { Day1CritiqueForm } from './Day1CritiqueForm';
import { Day2CommunicationForm } from './Day2CommunicationForm';
import { Day3LawForm } from './Day3LawForm';
import { Day4FindingsForm } from './Day4FindingsForm';
import { Day5FigmaForm } from './Day5FigmaForm';
import { Day6CaseStudyForm } from './Day6CaseStudyForm';
import { Day7PracticeForm } from './Day7PracticeForm';
import { SectionHeading } from '../SectionHeading';

interface ArtifactFormProps {
  day: Day;
  artifacts: Artifacts;
  onArtifactsChange: (artifacts: Artifacts) => void;
}

export function ArtifactForm({ day, artifacts, onArtifactsChange }: ArtifactFormProps) {
  const update = <K extends keyof Artifacts>(key: K, value: Artifacts[K]) => {
    onArtifactsChange({ ...artifacts, [key]: value });
  };

  return (
    <section id="artifacts" className="artifact-form">
      <SectionHeading level={3}>Your artifacts</SectionHeading>
      {day.artifactType === 'day1Critique' && (
        <Day1CritiqueForm
          artifacts={artifacts.day1}
          targets={day.artifactConfig?.critiqueTargets ?? []}
          onChange={(v) => update('day1', v)}
        />
      )}
      {day.artifactType === 'day2Communication' && (
        <Day2CommunicationForm
          artifacts={artifacts.day2}
          onChange={(v) => update('day2', v)}
        />
      )}
      {day.artifactType === 'day3Laws' && (
        <Day3LawForm
          artifacts={artifacts.day3}
          lawNames={day.artifactConfig?.lawNames ?? []}
          onChange={(v) => update('day3', v)}
        />
      )}
      {day.artifactType === 'day4Findings' && (
        <Day4FindingsForm
          artifacts={artifacts.day4}
          onChange={(v) => update('day4', v)}
        />
      )}
      {day.artifactType === 'day5Figma' && (
        <Day5FigmaForm
          artifacts={artifacts.day5}
          learnings={day.studyItems}
          onChange={(v) => update('day5', v)}
        />
      )}
      {day.artifactType === 'day6CaseStudy' && (
        <Day6CaseStudyForm
          artifacts={artifacts.day6}
          onChange={(v) => update('day6', v)}
        />
      )}
      {day.artifactType === 'day7Practice' && (
        <Day7PracticeForm
          artifacts={artifacts.day7}
          onChange={(v) => update('day7', v)}
        />
      )}
    </section>
  );
}
