import type { Metadata } from "next";
import { Open_Sans, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Rocxion Group - Smart Energy Solutions",
  description: "Empowering South Africa through Smart Energy Solutions. Leading provider of comprehensive solar energy services including design, installation, and maintenance.",
  keywords: "solar energy, renewable energy, South Africa, energy audit, solar installation, maintenance, ECB accredited",
  authors: [{ name: "Rocxion Group" }],
  openGraph: {
    title: "Rocxion Group - Smart Energy Solutions",
    description: "Empowering South Africa through Smart Energy Solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${openSans.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
