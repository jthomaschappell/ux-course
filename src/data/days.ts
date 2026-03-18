import type { Day } from '../types/course';

export const GOAL_BY_DAY_7 = [
  'Fluent in UX vocabulary',
  'Strong in core principles',
  'Able to run lightweight usability tests',
  'Capable of intelligent critique and redesign',
  'Confident in product discussions and interviews',
];

export const DAYS: Day[] = [
  {
    id: 'day1',
    title: 'UX Mental Models + Structured Critique',
    shortLabel: 'Day 1',
    studyItems: [
      'Nielsen Norman Group heuristics',
      'Key ideas from "The Design of Everyday Things"',
      'Laws of UX (Fitts, Hick, etc.)',
    ],
    deliverableTitle: '3 Structured Critiques',
    deliverableDescription: `Use this template for each interface:

1. Primary User Goal
2. Context of Use
3. Cognitive Load Sources
4. Heuristic Violations
5. Information Architecture Issues
6. Design Hypothesis
7. Expected Measurable Impact

Critique targets:
- Linear (or similar productivity tool)
- Your own app (DrawFi or similar)
- One intentionally bad website

Rule: No watching without writing.`,
    tasks: [
      { id: 'study', label: 'Study NNG heuristics, DoET, and Laws of UX' },
      { id: 'critique1', label: 'Complete critique 1: Linear or similar productivity tool' },
      { id: 'critique2', label: 'Complete critique 2: Your own app (DrawFi or similar)' },
      { id: 'critique3', label: 'Complete critique 3: Intentionally bad website' },
    ],
    artifactType: 'day1Critique',
    artifactConfig: {
      critiqueTargets: ['Linear (or similar productivity tool)', 'Your own app (DrawFi or similar)', 'One intentionally bad website'],
    },
  },
  {
    id: 'day2',
    title: 'UX Communication Training',
    shortLabel: 'Day 2',
    studyItems: [],
    deliverableTitle: '2-Minute Critique Recording',
    deliverableDescription: `Take one critique from Day 1.

Record yourself explaining it in under 2 minutes.

Remove vague phrases like:
- "cleaner"
- "better"
- "more intuitive"

Replace with:
- reduces cognitive load
- improves affordance clarity
- increases discoverability
- aligns with user mental model
- reduces task completion time

Goal: Clear, structured explanation without filler.`,
    tasks: [
      { id: 'pick', label: 'Choose one Day 1 critique to present' },
      { id: 'record', label: 'Record 2-minute explanation (external tool)' },
      { id: 'refine', label: 'Replace vague phrases with UX terminology' },
    ],
    artifactType: 'day2Communication',
  },
  {
    id: 'day3',
    title: 'Core UX Laws (Applied)',
    shortLabel: 'Day 3',
    studyItems: [
      "Fitts's Law",
      "Hick's Law",
      'Progressive Disclosure',
      'Recognition vs Recall',
      'Error Prevention',
    ],
    deliverableTitle: '5 Law Applications',
    deliverableDescription: `For each law, apply it to one real screen.

Write:
- Where it is respected
- Where it is violated
- What improvement would look like

If you can't apply it, you don't know it.`,
    tasks: [
      { id: 'fitts', label: "Apply Fitts's Law to a real screen" },
      { id: 'hick', label: "Apply Hick's Law to a real screen" },
      { id: 'progressive', label: 'Apply Progressive Disclosure to a real screen' },
      { id: 'recognition', label: 'Apply Recognition vs Recall to a real screen' },
      { id: 'error', label: 'Apply Error Prevention to a real screen' },
    ],
    artifactType: 'day3Laws',
    artifactConfig: {
      lawNames: ["Fitts's Law", "Hick's Law", 'Progressive Disclosure', 'Recognition vs Recall', 'Error Prevention'],
    },
  },
  {
    id: 'day4',
    title: 'Structured Usability Testing',
    shortLabel: 'Day 4',
    studyItems: [],
    deliverableTitle: 'Usability Findings Doc',
    deliverableDescription: `Run 2 usability tests (not interviews).

Script:
1. Give participant a task.
2. Say: "Think out loud."
3. Do not help.
4. Observe: hesitation, confusion language, misclicks, task abandonment

Produce a Usability Findings Doc. For each issue:
- Observed friction
- Root cause hypothesis
- Severity (Low / Medium / High)
- Proposed change

This becomes a real discussion artifact.`,
    tasks: [
      { id: 'test1', label: 'Run usability test 1' },
      { id: 'test2', label: 'Run usability test 2' },
      { id: 'doc', label: 'Document findings with severity and proposed changes' },
    ],
    artifactType: 'day4Findings',
  },
  {
    id: 'day5',
    title: 'Figma as a System',
    shortLabel: 'Day 5',
    studyItems: [
      '8px spacing system',
      'Visual hierarchy rules',
      'Typography scales',
      'Button states',
      'Component reuse',
      'Auto-layout',
    ],
    deliverableTitle: 'Recreate One Screen',
    deliverableDescription: `Recreate one screen from an app you admire.

Requirements:
- Consistent spacing
- Clear hierarchy
- Reusable components
- Clean layout logic

No random rectangle dragging.`,
    tasks: [
      { id: 'learn', label: 'Learn 8px system, hierarchy, typography, states, reuse, auto-layout' },
      { id: 'recreate', label: 'Recreate one screen from admired app in Figma' },
    ],
    artifactType: 'day5Figma',
  },
  {
    id: 'day6',
    title: 'Redesign Sprint (Mini Case Study)',
    shortLabel: 'Day 6',
    studyItems: [],
    deliverableTitle: 'Product Case Study',
    deliverableDescription: `Pick one flawed flow from your own app.

Deliver:
1. Problem framing
2. Assumptions
3. Observed friction
4. Redesign (in Figma)
5. Before/after comparison
6. Expected KPI impact

Write this like a product case study.`,
    tasks: [
      { id: 'pick', label: 'Pick flawed flow from own app' },
      { id: 'frame', label: 'Write problem framing and assumptions' },
      { id: 'redesign', label: 'Create redesign in Figma' },
      { id: 'document', label: 'Document before/after and expected KPI impact' },
    ],
    artifactType: 'day6CaseStudy',
  },
  {
    id: 'day7',
    title: 'Interview Fluency + Pushback Handling',
    shortLabel: 'Day 7',
    studyItems: [],
    deliverableTitle: 'Practice Answers',
    deliverableDescription: `Prepare answers using this formula:

User Goal → Constraint → Tradeoff → Design Decision → Validation → Outcome

Practice answering:
- How do you approach UX?
- How do you validate design assumptions?
- How do you balance business goals and usability?
- Tell me about a UX improvement you made.

Then simulate pushback:
- "Stakeholders disagree."
- "Research conflicts with revenue."
- "We don't have time for testing."

Respond clearly and confidently.`,
    tasks: [
      { id: 'formula', label: 'Prepare answers using the formula' },
      { id: 'practice', label: 'Practice all 4 interview questions' },
      { id: 'pushback', label: 'Simulate and practice pushback responses' },
    ],
    artifactType: 'day7Practice',
  },
];

export const REFERENCE_RESOURCES = [
  { name: 'Nielsen Norman Group', desc: 'Articles + YouTube' },
  { name: 'Laws of UX', desc: 'Visual psychology reference' },
  { name: 'Figma official tutorials', desc: '' },
  { name: 'Figma Community design systems', desc: '' },
  { name: 'AJ&Smart YouTube', desc: 'Practical UX walkthroughs' },
];

export const MENTAL_MODEL = `Always structure thinking like this:

User Goal → Context → Friction → Cognitive Load → Design Intervention → Measurable Outcome

Example:

Users submitting draw requests experience high cognitive load due to dense financial terminology. By restructuring the information architecture and applying progressive disclosure, we reduce friction and increase completion rates.`;

export const OUTCOME = `After 7 days you will not be a senior UX designer.

But you WILL be:
- Fluent in UX terminology
- Structured in critique
- Capable of running usability tests
- Comfortable redesigning flows
- Confident in product conversations`;
