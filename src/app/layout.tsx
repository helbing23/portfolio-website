import type { Metadata } from "next";
import localFont from "next/font/local";
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
    default: "Helbin Rapheal | Experienced Software Developer & AI Engineer",
    template: "%s | Helbin Rapheal",
  },
  description:
    "Helbin Rapheal crafts impactful digital solutions for business growth. Specializes in web design, app development, custom CMS, SEO, and web hosting.",
  keywords: [
    "full stack developer",
    "web developer",
    "software engineer",
    "hire software engineer",
    "Frontend developer",
    "Front-end developer",
    "Wordpress developer",
    "Wordpress full stack developer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "web development",
    "application development",
    "software solutions",
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
    title: "Helbin Rapheal | Experienced Software Developer & AI Engineer",
    description:
      "Helbin Rapheal crafts impactful digital solutions for business growth. Specializes in web design, app development, custom CMS (WordPress, Drupal, Shopify, Strapi), SEO, and web hosting.",
    url: "https://helbinrapheal.vercel.app",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Helbin Rapheal | Experienced Software Developer & AI Engineer",
    description:
      "Helbin Rapheal crafts impactful digital solutions for business growth. Specializes in web design, app development, custom CMS (WordPress, Drupal, Shopify, Strapi), SEO, and web hosting.",
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
        <script src="https://assets.calendly.com/assets/external/widget.js" async defer />
        {/* Structured Data - Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Helbin Rapheal",
              jobTitle: "Software Developer & AI Engineer",
              url: "https://helbinrapheal.vercel.app",
              description: "Experienced software developer specializing in web development, React, Next.js, and AI engineering.",
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
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "University of Sunderland",
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
              name: "Helbin Rapheal - Web Development Services",
              url: "https://helbinrapheal.vercel.app/services",
              description: "Professional web development services including React/Next.js development, CMS solutions, and SEO optimization.",
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
      </body>
    </html>
  );
}
