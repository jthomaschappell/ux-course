import { SectionHeading } from './SectionHeading';

interface StudySectionProps {
  items: string[];
}

export function StudySection({ items }: StudySectionProps) {
  return (
    <section className="study-section">
      <SectionHeading>Study</SectionHeading>
      {items.length > 0 ? (
        <ul>
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="study-empty">No additional reading for this day.</p>
      )}
    </section>
  );
}
