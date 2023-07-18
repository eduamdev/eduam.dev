import "@/styles/globals.css";
import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
        style={{ textRendering: "optimizeLegibility" }}
      >
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <div>{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
