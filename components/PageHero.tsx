interface PageHeroProps {
  title: string;
  subtitle?: string;
  recraftPrompt?: string;
}

export default function PageHero({ title, subtitle, recraftPrompt }: PageHeroProps) {
  return (
    <section className="page-hero-spacing">
      <div className="section-container text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Recraft AI hero image placeholder */}
        <div
          className="mt-8 mx-auto max-w-3xl h-56 sm:h-64 md:h-80 rounded-xl border-2 border-dashed border-border bg-muted flex flex-col items-center justify-center gap-2"
          data-recraft-prompt={
            recraftPrompt ??
            `Hero illustration for ${title} page of a fire and security company, professional photorealistic style, modern industrial backdrop`
          }
        >
          <span className="text-sm text-muted-foreground/50">Recraft AI Hero Image</span>
          <span className="text-xs text-muted-foreground/30 max-w-md text-center px-4">
            {recraftPrompt ?? "Fire & Security Services"}
          </span>
        </div>
      </div>
    </section>
  );
}