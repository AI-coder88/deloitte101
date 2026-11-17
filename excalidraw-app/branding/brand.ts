// Also imported by vite.config.mts (page title, meta tags, PWA manifest), so
// this module must stay free of browser-only code.

const productName = "Draw";

/** Primary UI green from `theme.scss` — used for browser/PWA chrome. */
const themeColor = "#26890d";

/** Deloitte accent green — used in logos and marketing imagery. */
const accentColor = "#86bc25";

export const BRAND = {
  productName,
  name: `Deloitte ${productName}`,
  description: `Deloitte ${productName} is a collaborative whiteboard for sketching diagrams that have a hand-drawn feel to them.`,
  issuesUrl: "https://github.com/AI-coder88/deloitte101/issues",
  themeColor,
  accentColor,
  /** PWA install / splash background */
  backgroundColor: "#ffffff",
} as const;
