import type { Metadata, Viewport } from "next";
// Fonts are self-hosted from npm packages rather than fetched from Google at build time:
// builds work offline and in CI, and readers' browsers never contact a third party.
// Three roles from the brand spec: editorial serif, interface sans, mono for IDs and dates.
import "@fontsource-variable/newsreader/opsz.css";
import "@fontsource-variable/newsreader/opsz-italic.css";
import "@fontsource-variable/dm-sans/index.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Receipts: Nigeria's public record, connected",
  description:
    "Receipts connects what Nigerian public officials said to the budgets, records and reporting that show what happened next. Every answer links to its source.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f0e8" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1d1b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG">
      <body className="antialiased">{children}</body>
    </html>
  );
}
