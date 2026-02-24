interface SectionHeadingProps {
  children: string;
  level?: 2 | 3;
}

export function SectionHeading({ children, level = 2 }: SectionHeadingProps) {
  const Tag = level === 2 ? 'h2' : 'h3';
  return <Tag className="section-heading">{children}</Tag>;
}
