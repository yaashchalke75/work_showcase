import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yash Chalke | Full-Stack Developer",
  description:
    "Full-Stack Developer specialising in React.js, React Native, Node.js, and MongoDB. Building scalable web and mobile products from Pune, India.",
  keywords: ["full-stack developer","react developer","react native","nodejs","mongodb","pune"],
  authors: [{ name: "Yash Chalke" }],
  openGraph: {
    type:        "website",
    title:       "Yash Chalke | Full-Stack Developer",
    description: "Building scalable web & mobile products.",
    siteName:    "Yash Chalke Portfolio",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
