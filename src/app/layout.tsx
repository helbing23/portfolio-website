import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ScrollToTop from "@/components/footer/ScrollToTop";
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
  metadataBase: new URL("https://www.helbinrapheal.com"),
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
  verification: {
    google: "your-google-verification-code",
  },
  openGraph: {
    title: "Helbin Rapheal | Experienced Software Developer & Aspiring AI Engineer",
    description:
      "Helbin Rapheal crafts impactful digital solutions for business growth. Specializes in web design, app development, custom CMS (WordPress, Drupal, Shopify, Strapi), SEO, and web hosting.",
    url: "https://www.helbinrapheal.com",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Helbin Rapheal - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Helbin Rapheal | Experienced Software Developer & Aspiring AI Engineer",
    description:
      "Helbin Rapheal crafts impactful digital solutions for business growth. Specializes in web design, app development, custom CMS (WordPress, Drupal, Shopify, Strapi), SEO, and web hosting.",
    creator: "@yourtwitterhandle",
    images: "/twitter-image.jpg",
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
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Helbin Rapheal",
              jobTitle: "Software Developer & AI Engineer",
              url: "https://www.helbinrapheal.com",
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
                "Tailwind",
                "WordPress",
                "Drupal",
                "Strapi",
                "SEO",
                "AI Engineering",
                "RAG",
                "AI Agents",
                "AIML",
                "LLM",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning={true}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow font-sans">
          {children}
          <Analytics />
        </main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
