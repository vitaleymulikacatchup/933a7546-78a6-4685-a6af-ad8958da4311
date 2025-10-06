import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MemePulse — playful memecoin landing page for the community",
  description: "MemePulse makes memecoin fun and approachable with a clear buy path, transparent tokenomics, and a vibrant community vibe that players can trust.",
  keywords: ["memecoin", "crypto landing page", "community", "tokenomics", "buy memecoin", "fun design", "meme crypto", "MemePulse"],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "MemePulse — playful memecoin landing page for the community",
    description: "MemePulse makes memecoin fun and approachable with a clear buy path, transparent tokenomics, and a vibrant community vibe that players can trust.",
    type: "website",
    url: "/",
    siteName: "MemePulse",
    images: [{ url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/draw-a-cartoon-desert-landscape-in-16-9--1759392060471-ddcb6959.jpg", width: 1200, height: 630, alt: "MemePulse logo with playful meme character on gradient background" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "MemePulse — playful memecoin landing page for the community",
    description: "MemePulse makes memecoin fun and approachable with a clear buy path, transparent tokenomics, and a vibrant community vibe that players can trust.",
    images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/draw-a-cartoon-desert-landscape-in-16-9--1759392060471-ddcb6959.jpg"]
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} ${playfairDisplay.variable} antialiased`} 
      >
        {children}
      </body>
    </html>
  );
}