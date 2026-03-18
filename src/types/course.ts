// Course structure types

export type DayId = 'day1' | 'day2' | 'day3' | 'day4' | 'day5' | 'day6' | 'day7';

export type ArtifactType =
  | 'day1Critique'
  | 'day2Communication'
  | 'day3Laws'
  | 'day4Findings'
  | 'day5Figma'
  | 'day6CaseStudy'
  | 'day7Practice';

export interface Task {
  id: string;
  label: string;
}

export interface Day {
  id: DayId;
  title: string;
  shortLabel: string;
  /** One-sentence why this day matters (shown under the title). */
  objective?: string;
  /** Rough time to complete this day's work. */
  estimatedMinutes?: number;
  /** Single focus for the day. */
  oneThingToNail?: string;
  studyItems: string[];
  deliverableTitle: string;
  deliverableDescription: string;
  tasks: Task[];
  artifactType: ArtifactType;
  artifactConfig?: {
    critiqueTargets?: string[];
    lawNames?: string[];
  };
}
