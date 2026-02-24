import { SectionHeading } from './SectionHeading';

interface DeliverableSectionProps {
  title: string;
  description: string;
}

export function DeliverableSection({ title, description }: DeliverableSectionProps) {
  return (
    <section className="deliverable-section">
      <SectionHeading>{`Deliverable: ${title}`}</SectionHeading>
      <div className="deliverable-description">{description}</div>
    </section>
  );
}
