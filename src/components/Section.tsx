type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
};

export function Section({ eyebrow, title, description, children, className = "" }: SectionProps) {
  return (
    <section className={`px-5 py-16 sm:px-8 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-earth">{eyebrow}</p>
          ) : null}
          <h2 className="text-3xl font-black leading-tight text-forest-900 sm:text-4xl lg:text-5xl">{title}</h2>
          {description ? <p className="mt-5 text-lg leading-8 text-forest-800/80">{description}</p> : null}
        </div>
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}
