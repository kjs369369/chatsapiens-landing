import type { Metadata, Viewport } from "next";
import { Cinzel, Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import { siteMetadata } from "@/lib/metadata";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { copy } from "@/lib/copy";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-cinzel",
});

const notoSerifKr = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-noto-serif-kr",
});

export const metadata: Metadata = siteMetadata;

export const viewport: Viewport = {
  themeColor: "#740001",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${cinzel.variable} ${notoSerifKr.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          {copy.nav.skipToContent}
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
