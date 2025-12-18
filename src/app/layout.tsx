import type { Metadata } from "next";
import { BBH_Sans_Bogle, Poppins, Roboto, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["200", "400"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["100", "300", "200", "400", "500", "600"],
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["200", "400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shrawan Sharma",
  description: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${roboto.variable} ${inter.variable} antialiased flex h-full`}
      >
        {/* <div className="font-">hello</div> */}
        {children}
      </body>
    </html>
  );
}
