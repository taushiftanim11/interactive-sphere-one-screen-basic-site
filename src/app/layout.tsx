import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tanim.me"),
  title: {
    default: "Taushif Tanim | Frontend Developer",
    template: "%s | Taushif Tanim",
  },
  description:
    "Frontend developer and creative coder. I build immersive, interactive web experiences with React, TypeScript, and modern CSS.",
  keywords: [
    "frontend developer",
    "react developer",
    "typescript",
    "web developer",
    "creative developer",
    "portfolio",
    "Taushif Tanim",
  ],
  authors: [{ name: "Taushif Tanim", url: "https://tanim.me" }],
  creator: "Taushif Tanim",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tanim.me",
    title: "Taushif Tanim | Frontend Developer",
    description:
      "Frontend developer and creative coder. I build immersive, interactive web experiences.",
    siteName: "Taushif Tanim",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Taushif Tanim — Frontend Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taushif Tanim | Frontend Developer",
    description:
      "Frontend developer and creative coder. I build immersive, interactive web experiences.",
    creator: "@taushiftanim",
    images: ["/og-image.jpg"],
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Taushif Tanim",
  url: "https://tanim.me",
  jobTitle: "Frontend Developer",
  sameAs: ["https://twitter.com/taushiftanim"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
