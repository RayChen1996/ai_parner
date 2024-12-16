import type { Metadata } from "next";
import { noto_sans_tc } from "@/fonts";
import "./globals.css";
import AppHeader from "@/components/Layouts/AppHeader";
import AppFooter from "@/components/Layouts/AppFooter";

export const metadata: Metadata = {
  title: "AI Parner",
  description: "AI Parner by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={(noto_sans_tc.className, "flex min-h-dvh flex-col")}>
        <AppHeader />
        <main className="flex-1">{children}</main>
        <AppFooter />
      </body>
    </html>
  );
}
