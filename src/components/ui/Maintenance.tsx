type MaintenanceProps = {
  title?: string;
  description?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export default function Maintenance({
  title = "Under maintenance",
  description = "This page is currently being prepared. Please check back soon.",
  ctaHref = "/",
  ctaLabel = "Go back home",
}: MaintenanceProps) {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-gradient-gray p-8 shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        <p className="text-muted-foreground mb-8">{description}</p>
        <a
          href={ctaHref}
          className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-foreground/5 transition-colors"
        >
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}
