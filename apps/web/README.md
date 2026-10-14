# Receipts web app

The public website: Next.js (App Router), TypeScript and Tailwind CSS.

## Run it locally

```bash
cd apps/web
pnpm install
pnpm dev
```

Then open http://localhost:3000.

## Where things live

| Path | What it is |
| --- | --- |
| `src/app/globals.css` | Design tokens: brand colours, fonts, the slip edge and the one load animation |
| `src/app/layout.tsx` | Page shell, fonts and metadata |
| `src/app/page.tsx` | The landing page |
| `src/components/ReceiptSlip.tsx` | The example receipt in the hero (fictional, labelled as such) |

## Rules this app follows

- Square corners, no pill buttons.
- Vermilion is for interaction only; brass is for rules, never body text.
- Monospace only for IDs, dates, timestamps and page references.
- Fonts are self-hosted from npm, so builds work offline and readers' browsers make no third-party font requests.
- Anything not real is labelled as an example.
