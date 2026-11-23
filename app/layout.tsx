import type { Metadata, Viewport } from "next";
import "@fontsource/unbounded/500.css";
import "@fontsource/unbounded/600.css";
import "@fontsource/unbounded/700.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import { profile } from "./data";

const title = `${profile.name}, ${profile.role}`;
const description =
  "Senior DevOps engineer running AWS and Kubernetes for fintech teams: Terraform, EKS, ArgoCD, Cloudflare and PCI-DSS.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: profile.siteUrl, siteName: profile.name, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#0c0f16",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-amber px-5 py-3 font-semibold text-night focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
