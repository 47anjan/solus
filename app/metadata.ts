import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: {
    default: "Solus | Support for Your Mental Well-being",
    template: "Solus",
  },
  description:
    "Solus is a comprehensive mental health platform connecting users with licensed therapists, counselors, and wellness coaches. Find support for online therapy, stress management, and your overall mental well-being.",
  keywords: [
    "mental health platform",
    "online therapy",
    "licensed therapist",
    "counselor",
    "wellness coach",
    "stress management",
    "mental well-being",
    "therapy online",
    "mental health support",
    "counseling services",
    "teletherapy",
    "mental wellness",
  ],
  authors: [{ name: "Solus" }],
  creator: "Solus",
  publisher: "Solus",
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
    type: "website",
    locale: "en_US",
    url: "https://solus-beta.vercel.app",
    title: "Solus | Support for Your Mental Well-being",
    description:
      "Connect with licensed therapists, counselors, and wellness coaches. Professional mental health support tailored to your needs.",
    siteName: "Solus",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Solus - Mental Health Support Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solus | Support for Your Mental Well-being",
    description:
      "Connect with licensed therapists, counselors, and wellness coaches. Professional mental health support tailored to your needs.",
    images: ["/twitter-image.jpg"],
    creator: "@solus",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://solus-beta.vercel.app",
  },
  category: "health",
  metadataBase: new URL("https://solus-beta.vercel.app"),
};

// Page-specific metadata
export const pageMetadata = {
  home: {
    title: "Solus | Support for Your Mental Well-being",
    description:
      "Connect with licensed therapists, counselors, and wellness coaches. Start your journey to better mental health today.",
  },
  about: {
    title: "About Us",
    description:
      "Learn about Solus and our mission to make mental health support accessible to everyone through our platform.",
  },
  therapists: {
    title: "Find a Therapist",
    description:
      "Browse our network of licensed therapists and counselors. Find the perfect match for your mental health needs.",
  },
  services: {
    title: "Our Services",
    description:
      "Explore our comprehensive mental health services including therapy, counseling, stress management, and wellness coaching.",
  },
  contact: {
    title: "Contact Us",
    description:
      "Get in touch with Solus. We're here to help you find the support you need for your mental well-being.",
  },
  pricing: {
    title: "Pricing",
    description:
      "Affordable mental health support plans. Choose the right option for your therapy and wellness needs.",
  },
};
