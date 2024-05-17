import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Mono({
    subsets: ["latin"],
    variable:'--font-roboto'
});

export const metadata: Metadata = {
  title: "Vladyslav Gershman",
  description: "Software developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans`}>
       {children}
      </body>
    </html>
  );
}
