import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1B1033",
        "ink-soft": "#241640",
        "ink-softer": "#2E1F4D",
        paper: "#F3E8FF",
        "paper-dim": "#E5D3FA",
        marigold: "#7C3AED",
        "marigold-bright": "#A78BFA",
        clay: "#9D5CE0",
        sage: "#8B7CA6",
        "aiki-ink": "#150B26",
        "aiki-ink-soft": "#1F1233",
        "aiki-steel": "#4A3B66",
        "aiki-paper": "#F5EEFF",
        "aiki-paper-dim": "#E8DDF7",
        "aiki-accent": "#7C3AED",
        "aiki-accent-bright": "#A78BFA",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
        script: ["var(--font-caveat)", "cursive"],
        "aiki-display": ["var(--font-space-grotesk)", "sans-serif"],
        "aiki-body": ["var(--font-plex-sans)", "sans-serif"],
      },
      keyframes: {
        breathe: {
          "0%, 100%": { opacity: "0.75" },
          "50%": { opacity: "1" },
        },
        signal: {
          "0%": { strokeDashoffset: "240" },
          "100%": { strokeDashoffset: "0" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        breathe: "breathe 7s ease-in-out infinite",
        signal: "signal 3.2s linear infinite",
        blink: "blink 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;