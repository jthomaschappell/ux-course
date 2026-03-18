import { SectionHeading } from './SectionHeading';

interface StudySectionProps {
  items: string[];
  /** When true, only render the list (no "Study" heading). Used inside EditableStudyDeliverable. */
  hideHeading?: boolean;
}

export function StudySection({ items, hideHeading = false }: StudySectionProps) {
  return (
    <section className="study-section">
      {!hideHeading && <SectionHeading>Study</SectionHeading>}
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
