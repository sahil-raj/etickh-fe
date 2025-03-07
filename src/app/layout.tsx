import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ETickH",
  description: "For terminally onchain peeps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
