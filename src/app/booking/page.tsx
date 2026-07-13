import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import CalendlyInlineWidget from "@/components/ui/CalendlyInlineWidget";

export const metadata: Metadata = {
  title: "Book an Intro Call",
  description:
    "Thirty minutes with Helbin Rapheal. Fractional CTO for early-stage founders, senior development capacity for agencies. Pick a slot that works for you.",
  alternates: {
    canonical: "/booking",
  },
  openGraph: {
    title: "Book an Intro Call | Helbin Rapheal",
    description:
      "Thirty minutes with Helbin Rapheal. Fractional CTO for founders, senior development capacity for agencies.",
    url: "https://helbinrapheal.vercel.app/booking",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book an Intro Call | Helbin Rapheal",
    description: "Thirty minutes with Helbin Rapheal. Fractional CTO for founders, senior development capacity for agencies.",
    images: ["/twitter-image"],
  },
};

export default function BookingPage() {
  return (
    <section className="py-16 md:py-24">
      <Container as="div">
        {/* Header Section */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4 gradient-text">
            Book an intro call
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
            Thirty minutes, no pitch deck required.
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-2">
            <strong>Founders:</strong> bring the product you&apos;re building or the
            technical decision you&apos;re stuck on. I&apos;ll tell you honestly whether
            a fractional CTO is what you need.
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            <strong>Agency owners:</strong> bring the project that needs senior
            hands. We&apos;ll work out scope, standards and handover on the call.
          </p>
        </header>

        {/* Calendly Inline Widget */}
        <CalendlyInlineWidget />

        {/* Additional Info Section */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All times are displayed in your local timezone.
            You&apos;ll receive a confirmation email with calendar invite.
          </p>
        </div>
      </Container>
    </section>
  );
}
