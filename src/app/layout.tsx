import ReduxProvider from "@/redux/provider/ReduxProvider";
import type { Metadata } from "next";
import { Inter, Playfair } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const playfair = Playfair({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "arsalanazlan",
  description: "Advance Your Professional Journey.",
};

// Bellota

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.variable} ${playfair.variable} antialiased`}>
        <ReduxProvider>
          <div className="">{children}</div>
        </ReduxProvider>
      </body>
    </html>
  );
}
