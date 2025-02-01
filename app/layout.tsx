import { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Providers } from "./providers";
import TopBar from "@/components/layout/TopBar/index";
import Navbar from "@/components/layout/Navbar/index";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Continuity Business Solutions",
  description: "End-to-end business transformation solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Providers>
          <TopBar />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
