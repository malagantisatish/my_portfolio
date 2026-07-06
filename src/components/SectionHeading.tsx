interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">{eyebrow}</p>
      <h2 className="font-display text-2xl font-semibold text-text-light sm:text-3xl dark:text-text-dark">
        {title}
      </h2>
      {description && (
        <p className="mt-2 max-w-2xl text-sm text-muted-light dark:text-muted-dark">{description}</p>
      )}
    </div>
  );
}
