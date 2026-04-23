import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sophie Zheng | Software Engineer Portfolio",
  description:
    "Portfolio of Sophie Zheng, a computer science student building full-stack applications and Android products for software engineer, software developer, and full-stack roles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
