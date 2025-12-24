import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import CalendlyInlineWidget from "@/components/ui/CalendlyInlineWidget";

export const metadata: Metadata = {
  title: "Book a Meeting",
  description:
    "Schedule a consultation or meeting with Helbin Rapheal. Choose a convenient time slot for project discussions, technical consultations, or general inquiries.",
  alternates: {
    canonical: "/booking",
  },
  openGraph: {
    title: "Book a Meeting | Helbin Rapheal",
    description:
      "Schedule a consultation or meeting with Helbin Rapheal",
    url: "https://helbinrapheal.vercel.app/booking",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Meeting | Helbin Rapheal",
    description: "Schedule a consultation or meeting with Helbin Rapheal. Choose a convenient time slot for project discussions.",
  },
};

export default function BookingPage() {
  return (
    <section className="py-20 px-4">
      <Container as="div" className="max-w-5xl">
        {/* Header Section */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4 gradient-text">
            Schedule a Meeting
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Book a time to discuss your project, get consultation, or just connect.
            Choose a slot that works best for you, and I&apos;ll get back to you with
            calendar confirmation.
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
