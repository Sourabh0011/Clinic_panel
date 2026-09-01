import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1CBCCF",
};

export const metadata: Metadata = {
  title: "Insove - Medical & Healthcare Clinic",
  description:
    "Insove Medical Healthcare provides comprehensive healthcare, general practitioners, pregnancy care, nutrition, cardiology, and more with expert doctors.",
  keywords: [
    "Healthcare",
    "Clinic",
    "Medical",
    "Doctors",
    "Cardiology",
    "Pediatrics",
    "Appointments",
    "Insove",
  ],
  authors: [{ name: "Insove Medical Healthcare" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable}`}>
      <body className="font-poppins bg-white text-accent antialiased flex flex-col min-h-screen">
        {/* Global Navigation Bar */}
        <Navbar />

        {/* Main Page Content */}
        <main className="flex-grow">{children}</main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
