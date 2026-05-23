type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
};

export function Section({ eyebrow, title, description, children, className = "", tone = "light" }: SectionProps) {
  const isDark = tone === "dark";

  return (
    <section className={`px-4 py-12 sm:px-8 sm:py-16 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className={`mb-3 text-xs font-black uppercase tracking-[0.2em] sm:text-sm ${isDark ? "text-banana" : "text-earth"}`}>{eyebrow}</p>
          ) : null}
          <h2 className={`font-display text-3xl font-black leading-[1.04] sm:text-4xl lg:text-5xl ${isDark ? "text-white" : "text-forest-900"}`}>
            {title}
          </h2>
          {description ? <p className={`mt-5 text-lg leading-8 ${isDark ? "text-white/76" : "text-forest-800/80"}`}>{description}</p> : null}
        </div>
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}
