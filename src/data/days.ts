import type { Day } from '../types/course';

export const GOAL_BY_DAY_7 = [
  'Fluent in UX vocabulary',
  'Strong in core principles',
  'Able to run lightweight usability tests',
  'Capable of intelligent critique and redesign',
  'Confident in product discussions and interviews',
];

/** Maps each goal to the day(s) that reinforce it. */
export const GOAL_TO_DAYS: Record<string, string> = {
  'Fluent in UX vocabulary': 'Days 1–3',
  'Strong in core principles': 'Days 1–3',
  'Able to run lightweight usability tests': 'Day 4',
  'Capable of intelligent critique and redesign': 'Days 1, 5, 6',
  'Confident in product discussions and interviews': 'Days 2, 7',
};

export const COURSE_INTRO = `This plan is for developers and product people who want UX fluency in one week—not to become a senior designer, but to speak the language, run lightweight tests, and hold your own in product discussions.

How to use: each day has Study material, a Deliverable, Tasks, and an Artifacts section. Do the reading first, then complete the deliverable and check off tasks as you go. Expect about 1–2 hours per day; some days (e.g. Day 1 and Day 4) may take longer.`;

export const DAYS: Day[] = [
  {
    id: 'day1',
    title: 'UX Mental Models + Structured Critique',
    shortLabel: 'Day 1',
    objective: 'So you can name what’s wrong and why, using shared UX vocabulary.',
    estimatedMinutes: 90,
    oneThingToNail: 'Complete at least one full critique using every section of the template.',
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
- A productivity tool you use (e.g. Linear, Notion, Asana)
- An app you're building or own
- One intentionally bad website (e.g. badusability.com)

Rule: No watching without writing—use the product in small chunks and complete each section of the critique before moving on.

Good looks like: At least one heuristic violation named with NNG-style wording; a design hypothesis that could be tested.`,
    tasks: [
      { id: 'study', label: 'Study NNG heuristics, DoET, and Laws of UX' },
      { id: 'critique1', label: 'Complete critique 1: Productivity tool you use' },
      { id: 'critique2', label: 'Complete critique 2: Your own app' },
      { id: 'critique3', label: 'Complete critique 3: Intentionally bad website' },
    ],
    artifactType: 'day1Critique',
    artifactConfig: {
      critiqueTargets: [
        'A productivity tool you use (e.g. Linear, Notion)',
        "An app you're building or own",
        'One intentionally bad website',
      ],
    },
  },
  {
    id: 'day2',
    title: 'UX Communication Training',
    shortLabel: 'Day 2',
    objective: 'So you can explain a critique clearly in under 2 minutes.',
    estimatedMinutes: 45,
    oneThingToNail: 'Record once, then re-record after replacing every vague word with UX terminology.',
    studyItems: [
      'Structured critique script: goal → friction → intervention → outcome',
      'Replacing vague UX language (NNG articles on plain language)',
      '2-minute pitch structure (hook, problem, evidence, recommendation)',
    ],
    deliverableTitle: '2-Minute Critique Recording',
    deliverableDescription: `Take one critique from Day 1 and present it.

Record yourself explaining it in under 2 minutes (use Loom, QuickTime, or your phone).

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
    objective: 'So you can tie design choices to named principles in interviews and reviews.',
    estimatedMinutes: 60,
    oneThingToNail: 'Apply every law to the same screen so you see how they interact.',
    studyItems: [
      "Fitts's Law",
      "Hick's Law",
      'Progressive Disclosure',
      'Recognition vs Recall',
      'Error Prevention',
    ],
    deliverableTitle: '5 Law Applications',
    deliverableDescription: `For each law, apply it to one real screen (name the screen or product).

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
    objective: 'So you can run a lightweight test and turn observations into a findings doc.',
    estimatedMinutes: 90,
    oneThingToNail: 'Stick to the script: give a task, say "think out loud," and do not help.',
    studyItems: [
      'Moderator script and think-aloud instructions',
      'Task design: realistic, observable, one clear outcome',
      'Severity criteria: High = blocks task; Medium = major friction; Low = annoyance',
    ],
    deliverableTitle: 'Usability Findings Doc',
    deliverableDescription: `Run 2 usability tests (not interviews).

Script:
1. Give participant a task.
2. Say: "Think out loud."
3. Do not help.
4. Observe: hesitation, confusion, misclicks, task abandonment.
5. Do not ask "Would you use this?" or preference questions—focus on observed behavior and task completion.

Produce a Usability Findings Doc. For each issue:
- Observed friction
- Root cause hypothesis
- Severity (High = blocks task; Medium = major friction; Low = annoyance)
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
    objective: 'So you can translate ideas into a consistent, component-based screen.',
    estimatedMinutes: 75,
    oneThingToNail: 'Use auto-layout and components so the screen is maintainable.',
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
- Consistent spacing (e.g. 8px system)
- Clear hierarchy
- Reusable components
- Clean layout logic (auto-layout)

No random rectangle dragging. Use auto-layout and components so the screen is maintainable. Share a view-only Figma link in your artifact.`,
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
    objective: 'So you can tell a before/after story with problem, solution, and impact.',
    estimatedMinutes: 90,
    oneThingToNail: 'Include a view-only Figma link and one clear metric in expected KPI impact.',
    studyItems: [
      'Case study structure: problem → research → solution → impact',
      'Before/after storytelling',
      'Choosing KPIs that matter for UX (completion rate, time on task, error rate)',
    ],
    deliverableTitle: 'Product Case Study',
    deliverableDescription: `Pick one flawed flow from your own app.

Deliver:
1. Problem framing
2. Assumptions
3. Observed friction
4. Redesign (in Figma—include view-only link)
5. Before/after comparison
6. Expected KPI impact

Write this like a product case study.

Good looks like: Clear before/after; one measurable KPI; redesign link so reviewers can open it.`,
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
    objective: 'So you can answer UX questions and handle pushback with structure and evidence.',
    estimatedMinutes: 60,
    oneThingToNail: 'Practice the formula out loud for at least one question and one pushback.',
    studyItems: [
      'Answer structure: situation → constraint → tradeoff → decision → validation → outcome',
      'Pushback patterns and evidence-based responses',
      'Portfolio story framing (problem, your role, result)',
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
  },
];

export const REFERENCE_RESOURCES: { name: string; desc: string; url?: string }[] = [
  { name: 'Nielsen Norman Group', desc: 'Articles + YouTube', url: 'https://www.nngroup.com' },
  { name: 'Laws of UX', desc: 'Visual psychology reference', url: 'https://lawsofux.com' },
  { name: 'Figma official tutorials', desc: 'Learn Figma', url: 'https://www.figma.com/resources/learn-design/' },
  { name: 'Figma Community design systems', desc: 'Design systems', url: 'https://www.figma.com/community/search?model_type=files&q=design%20system' },
  { name: 'AJ&Smart YouTube', desc: 'Practical UX walkthroughs', url: 'https://www.youtube.com/@AJSmartDesign' },
];

export const MENTAL_MODEL_ONE_LINER = 'Goal → Context → Friction → Cognitive Load → Intervention → Outcome';

export const MENTAL_MODEL = `Always structure thinking like this:

User Goal → Context → Friction → Cognitive Load → Design Intervention → Measurable Outcome

Example:

Users submitting draw requests experience high cognitive load due to dense financial terminology. By restructuring the information architecture and applying progressive disclosure, we reduce friction and increase completion rates.`;

export const SEVERITY_DEFINITIONS = `Severity (for usability findings):
• High — Blocks the task; user cannot complete the goal.
• Medium — Major friction; user can complete but with significant effort or errors.
• Low — Annoyance or minor confusion; task is still completed.`;

export const INTERVIEW_FORMULA = 'User Goal → Constraint → Tradeoff → Design Decision → Validation → Outcome';

export const OUTCOME = `After 7 days you will not be a senior UX designer. This plan builds fluency, not full expertise.

But you WILL be:
- Fluent in UX terminology
- Structured in critique
- Capable of running usability tests
- Comfortable redesigning flows
- Confident in product conversations`;
