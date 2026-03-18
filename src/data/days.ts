import type { Day } from '../types/course';

export const GOAL_BY_DAY_7: { goal: string; days: string }[] = [
  { goal: 'Fluent in UX vocabulary', days: 'Days 1–3' },
  { goal: 'Strong in core principles', days: 'Days 1–3' },
  { goal: 'Able to run lightweight usability tests', days: 'Day 4' },
  { goal: 'Capable of intelligent critique and redesign', days: 'Days 5–6' },
  { goal: 'Confident in product discussions and interviews', days: 'Day 7' },
];

export const SEVERITY_DEFINITIONS = {
  High: 'Blocks task completion',
  Medium: 'Major friction',
  Low: 'Annoyance',
} as const;

export const MENTAL_MODEL_ONE_LINER =
  'Goal → Context → Friction → Cognitive Load → Design Intervention → Measurable Outcome';

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
- A productivity tool you use
- An app you're building or own
- One intentionally bad website

Rule: Use the product in small chunks and complete each section before moving on. No watching without writing.

Good looks like: At least one heuristic named NNG-style, a testable hypothesis.`,
    tasks: [
      { id: 'study', label: 'Study NNG heuristics, DoET, and Laws of UX' },
      { id: 'critique1', label: 'Complete critique 1: A productivity tool you use' },
      { id: 'critique2', label: 'Complete critique 2: An app you\'re building or own' },
      { id: 'critique3', label: 'Complete critique 3: Intentionally bad website' },
    ],
    artifactType: 'day1Critique',
    artifactConfig: {
      critiqueTargets: ['A productivity tool you use', 'An app you\'re building or own', 'One intentionally bad website'],
    },
    objective: 'Build a shared mental model for UX critique and learn to apply heuristics.',
    estimatedMinutes: 90,
    oneThingToNail: 'At least one heuristic named NNG-style and a testable hypothesis.',
  },
  {
    id: 'day2',
    title: 'UX Communication Training',
    shortLabel: 'Day 2',
    studyItems: [
      'Critique script structure',
      'Replacing vague language with UX terminology',
      '2-minute pitch format',
    ],
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
    objective: 'Translate critique into clear, structured speech without vague language.',
    estimatedMinutes: 45,
    oneThingToNail: 'Replace at least one vague phrase with specific UX terminology.',
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
    objective: 'Apply UX laws to real screens so you can spot violations and improvements.',
    estimatedMinutes: 75,
    oneThingToNail: 'Apply at least one law to a real screen with concrete before/after.',
  },
  {
    id: 'day4',
    title: 'Structured Usability Testing',
    shortLabel: 'Day 4',
    studyItems: [
      'Moderator script',
      'Task design',
      'Severity (High / Medium / Low)',
    ],
    deliverableTitle: 'Usability Findings Doc',
    deliverableDescription: `Run 2 usability tests (not interviews).

Script:
1. Give participant a task.
2. Say: "Think out loud."
3. Do not help.
4. Observe: hesitation, confusion language, misclicks, task abandonment

Do not ask preference questions (e.g. "Would you use this?"). Focus on observed behavior and task completion.

Produce a Usability Findings Doc. For each issue:
- Observed friction
- Root cause hypothesis
- Severity (Low / Medium / High — see Reference panel for definitions)
- Proposed change

This becomes a real discussion artifact.`,
    tasks: [
      { id: 'test1', label: 'Run usability test 1' },
      { id: 'test2', label: 'Run usability test 2' },
      { id: 'doc', label: 'Document findings with severity and proposed changes' },
    ],
    artifactType: 'day4Findings',
    objective: 'Run lightweight usability tests and document findings with severity.',
    estimatedMinutes: 90,
    oneThingToNail: 'One task given to participant, observed behavior only (no preference questions).',
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
- Use auto-layout and components
- Consistent spacing
- Clear hierarchy
- Reusable components
- Clean layout logic
- Share a view-only Figma link

No random rectangle dragging.`,
    tasks: [
      { id: 'learn', label: 'Learn 8px system, hierarchy, typography, states, reuse, auto-layout' },
      { id: 'recreate', label: 'Recreate one screen from admired app in Figma' },
    ],
    artifactType: 'day5Figma',
    objective: 'Learn Figma as a system: spacing, hierarchy, components, auto-layout.',
    estimatedMinutes: 90,
    oneThingToNail: 'Use auto-layout and share a view-only Figma link.',
  },
  {
    id: 'day6',
    title: 'Redesign Sprint (Mini Case Study)',
    shortLabel: 'Day 6',
    studyItems: [
      'Case study structure',
      'Before/after framing',
      'KPIs for design impact',
    ],
    deliverableTitle: 'Product Case Study',
    deliverableDescription: `Pick one flawed flow from your own app.

Deliver:
1. Problem framing
2. Assumptions
3. Observed friction
4. Redesign (in Figma)
5. Before/after comparison
6. Expected KPI impact

Good looks like: Clear before/after, one KPI, redesign link.

Write this like a product case study.`,
    tasks: [
      { id: 'pick', label: 'Pick flawed flow from own app' },
      { id: 'frame', label: 'Write problem framing and assumptions' },
      { id: 'redesign', label: 'Create redesign in Figma' },
      { id: 'document', label: 'Document before/after and expected KPI impact' },
    ],
    artifactType: 'day6CaseStudy',
    objective: 'Produce a mini case study with before/after and one KPI.',
    estimatedMinutes: 90,
    oneThingToNail: 'Clear before/after comparison and one KPI.',
  },
  {
    id: 'day7',
    title: 'Interview Fluency + Pushback Handling',
    shortLabel: 'Day 7',
    studyItems: [
      'Answer structure (Goal → Constraint → Tradeoff → Design Decision → Validation → Outcome)',
      'Pushback patterns',
      'Portfolio framing',
    ],
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
    objective: 'Speak confidently in interviews and handle pushback.',
    estimatedMinutes: 60,
    oneThingToNail: 'One answer using the formula; one pushback response practiced.',
  },
];

export const REFERENCE_RESOURCES: { name: string; desc: string; url?: string }[] = [
  { name: 'Nielsen Norman Group', desc: 'Articles + YouTube', url: 'https://www.nngroup.com' },
  { name: 'Laws of UX', desc: 'Visual psychology reference', url: 'https://lawsofux.com' },
  { name: 'Figma official tutorials', desc: '', url: 'https://www.figma.com/resources/learn-design/' },
  { name: 'Figma Community design systems', desc: '', url: 'https://www.figma.com/community' },
  { name: 'AJ&Smart YouTube', desc: 'Practical UX walkthroughs', url: 'https://www.youtube.com/@ajsmart' },
];

export const MENTAL_MODEL = `Always structure thinking like this:

User Goal → Context → Friction → Cognitive Load → Design Intervention → Measurable Outcome

Example:

Users submitting draw requests experience high cognitive load due to dense financial terminology. By restructuring the information architecture and applying progressive disclosure, we reduce friction and increase completion rates.`;

export const OUTCOME = `After 7 days you will not be a senior UX designer.

This plan builds fluency, not full expertise.

But you WILL be:
- Fluent in UX terminology
- Structured in critique
- Capable of running usability tests
- Comfortable redesigning flows
- Confident in product conversations`;
