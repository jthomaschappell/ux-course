// Persistence and artifact types

import type { DayId } from './course';

// Task progress: dayId -> taskId -> done
export type TaskProgress = Partial<Record<DayId, Record<string, boolean>>>;

// Day 1: 3 structured critiques
export interface StructuredCritique {
  target: string;
  primaryGoal: string;
  contextOfUse: string;
  cognitiveLoadSources: string;
  heuristicViolations: string;
  iaIssues: string;
  designHypothesis: string;
  expectedImpact: string;
}

export type Day1Artifacts = [StructuredCritique, StructuredCritique, StructuredCritique];

// Day 2: chosen critique + notes
export interface Day2Artifacts {
  chosenCritiqueId: number; // 0, 1, or 2
  notes: string;
}

// Day 3: 5 law applications
export interface LawApplication {
  whereRespected: string;
  whereViolated: string;
  improvement: string;
}

export type Day3Artifacts = LawApplication[];

// Day 4: usability test findings
export interface UsabilityIssue {
  friction: string;
  rootCauseHypothesis: string;
  severity: 'Low' | 'Medium' | 'High';
  proposedChange: string;
}

export interface UsabilityTestEntry {
  /** Task given to the participant (e.g. "Create a new project and add a task"). */
  taskDescription?: string;
  issues: UsabilityIssue[];
}

export type Day4Artifacts = UsabilityTestEntry[];

// Day 5: Figma learnings
export interface Day5Artifacts {
  learnings: Record<string, boolean>; // checklist
  recreateNotes: string;
}

// Day 6: case study
export interface Day6Artifacts {
  problemFraming: string;
  assumptions: string;
  observedFriction: string;
  redesignNotes: string;
  beforeAfterComparison: string;
  expectedKpiImpact: string;
}

// Day 7: practice notes
export interface Day7Artifacts {
  approachAnswer: string;
  validateAnswer: string;
  balanceAnswer: string;
  improvementAnswer: string;
  pushbackNotes: string;
}

export type Artifacts = Partial<{
  day1: Day1Artifacts;
  day2: Day2Artifacts;
  day3: Day3Artifacts;
  day4: Day4Artifacts;
  day5: Day5Artifacts;
  day6: Day6Artifacts;
  day7: Day7Artifacts;
}>;

export interface StorageSchema {
  version: number;
  taskProgress: TaskProgress;
  artifacts: Artifacts;
}
