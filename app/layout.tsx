import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Sun Parlour Boat Club | LaSalle, Ontario",
  description: "The Friendliest Club On The Lake. A premier power boating organization serving Southwest Ontario since the 1960s. Member of I-LYA, AYC, and IOBG.",
  keywords: ["boat club", "yacht club", "LaSalle Ontario", "Detroit River", "Lake St Clair", "boating", "marina", "Holiday Harbour"],
  authors: [{ name: "Sun Parlour Boat Club" }],
  openGraph: {
    title: "Sun Parlour Boat Club",
    description: "The Friendliest Club On The Lake",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
