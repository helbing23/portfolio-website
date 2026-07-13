import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "../styles/globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ScrollToTop from "@/components/footer/ScrollToTop";
import LiquidBackground from "@/components/ui/LiquidBackground";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://helbinrapheal.vercel.app"),
  title: {
    default: "Helbin Rapheal | Fractional CTO & Next.js Partner",
    template: "%s | Helbin Rapheal",
  },
  description:
    "Fractional CTO for early-stage SaaS and HealthTech founders, and senior Next.js/TypeScript overflow development for agencies. Co-founder & CTO at Therapyway.",
  keywords: [
    "fractional CTO",
    "fractional CTO UK",
    "technical co-founder",
    "advisory CTO",
    "startup CTO",
    "Next.js developer",
    "Next.js agency partner",
    "white-label development",
    "white-label Next.js development",
    "TypeScript developer",
    "overflow development",
    "MVP development",
    "SaaS development",
    "HealthTech",
    "WordPress migration",
    "Nest.js developer",
    "Strapi developer",
    "Python FastAPI developer",
    "AWS DevOps",
    "mobile app development",
    "AI consulting",
    "website development packages",
    "Helbin Rapheal",
    "helbinrapheal",
    "portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Helbin Rapheal | Fractional CTO & Next.js Partner",
    description:
      "Fractional CTO for early-stage SaaS and HealthTech founders, and senior Next.js/TypeScript overflow development for agencies. Co-founder & CTO at Therapyway.",
    url: "https://helbinrapheal.vercel.app",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Helbin Rapheal | Fractional CTO & Next.js Partner",
    description:
      "Fractional CTO for early-stage SaaS and HealthTech founders, and senior Next.js/TypeScript overflow development for agencies. Co-founder & CTO at Therapyway.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* Calendly integration */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        {/* Structured Data - Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Helbin Rapheal",
              jobTitle: "Fractional CTO & Product Engineering Architect",
              url: "https://helbinrapheal.vercel.app",
              description: "Fractional CTO for early-stage SaaS and HealthTech startups, co-founder & CTO at Therapyway, and senior Next.js/TypeScript development partner for agencies.",
              email: "helbinrapheal24@gmail.com",
              sameAs: [
                "https://linkedin.com/in/helbinrapheal",
                "https://github.com/helbing23",
                "https://app.daily.dev/helbindev",
                "https://bsky.app/profile/helbinr.bsky.social",
              ],
              knowsAbout: [
                "Web Development",
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Tailwind CSS",
                "WordPress",
                "Drupal",
                "Strapi",
                "SEO",
                "AI Engineering",
                "RAG",
                "AI Agents",
                "Machine Learning",
                "LLM",
                "Full Stack Development",
                "Nest.js",
                "Python",
                "FastAPI",
                "AWS",
                "GitHub Actions",
                "Mobile App Development",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Goa University",
              },
            }),
          }}
        />
        {/* Structured Data - Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Helbin Rapheal - Software Developer Portfolio",
              url: "https://helbinrapheal.vercel.app",
              description: "Professional portfolio showcasing web development projects, technical insights, and software engineering services.",
              author: {
                "@type": "Person",
                name: "Helbin Rapheal",
              },
              inLanguage: "en-GB",
            }),
          }}
        />
        {/* Structured Data - Professional Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Helbin Rapheal - Fractional CTO & Development Partner",
              url: "https://helbinrapheal.vercel.app/booking",
              description: "Fractional CTO services for early-stage SaaS and HealthTech startups, and white-label development for agencies: MVP builds, mobile apps, custom software, infrastructure rescue and WordPress-to-modern-stack migrations.",
              provider: {
                "@type": "Person",
                name: "Helbin Rapheal",
              },
              areaServed: "Worldwide",
              availableLanguage: "English",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-sans`}
        suppressHydrationWarning={true}
      >
        <LiquidBackground />
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
          <Analytics />
        </main>
        <ScrollToTop />
        <Footer />
        {/* Calendly Script - Load after page is interactive */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
