import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Retail CRM",
  description: "Retail CRM application foundation",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
