import { SectionHeading } from './SectionHeading';

interface StudySectionProps {
  items: string[];
}

export function StudySection({ items }: StudySectionProps) {
  if (items.length === 0) return null;

  return (
    <section className="study-section">
      <SectionHeading>Study</SectionHeading>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
