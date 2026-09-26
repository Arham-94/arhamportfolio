import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

/* =========================================================
   SITE CONFIG
========================================================= */

const siteUrl = "https://arhamdev.vercel.app";

const siteName = "Arham Khan";
const siteTitle = "Arham Khan — Full-Stack Web Developer";
const siteDescription =
  "Arham Khan is a full-stack web developer specializing in modern websites, web applications, AI-powered systems, React, Next.js, Python, Django, FastAPI, GraphQL, and responsive UI/UX.";

const siteKeywords = [
  "Arham Khan",
  "Arham Khan developer",
  "Arham developer",
  "full-stack web developer",
  "web developer",
  "frontend developer",
  "backend developer",
  "React developer",
  "Next.js developer",
  "JavaScript developer",
  "Python developer",
  "Django developer",
  "FastAPI developer",
  "GraphQL developer",
  "AI developer",
  "AI web developer",
  "full stack developer Pakistan",
  "web development portfolio",
  "modern web development",
  "responsive web design",
  "UI UX developer",
];

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: "%s | Arham Khan",
  },

  description: siteDescription,

  keywords: siteKeywords,

  applicationName: siteName,

  authors: [
    {
      name: "Arham Khan",
      url: siteUrl,
    },
  ],

  creator: "Arham Khan",
  publisher: "Arham Khan",

  category: "technology",

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,

    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Arham Khan — Full-Stack Web Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,

    images: ["/opengraph-image.png"],

    creator: "@ArhamDev94",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  manifest: "/manifest.webmanifest",
};

/* =========================================================
   VIEWPORT
========================================================= */

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0a0a0b",

  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/* =========================================================
   STRUCTURED DATA
========================================================= */

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",

  name: "Arham Khan",

  url: siteUrl,

  jobTitle: "Full-Stack Web Developer",

  description: siteDescription,

  knowsAbout: [
    "Web Development",
    "Full-Stack Development",
    "React",
    "Next.js",
    "JavaScript",
    "Python",
    "Django",
    "FastAPI",
    "GraphQL",
    "AI Development",
    "UI/UX",
    "Responsive Web Design",
  ],

  sameAs: [
    // Add your real profiles here
    // "https://github.com/yourusername",
    // "https://www.linkedin.com/in/yourusername",
    // "https://www.instagram.com/yourusername",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",

  name: siteName,

  url: siteUrl,

  description: siteDescription,

  author: {
    "@type": "Person",
    name: "Arham Khan",
    url: siteUrl,
  },

  inLanguage: "en-US",
};

/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-background`}
    >
      <head>
        {/* =====================================================
            PERSON STRUCTURED DATA
        ===================================================== */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        {/* =====================================================
            WEBSITE STRUCTURED DATA
        ===================================================== */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>

      <body className="font-sans antialiased">
        {children}

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
