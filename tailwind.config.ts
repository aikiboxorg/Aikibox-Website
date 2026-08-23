import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1B2A3D",
        "ink-soft": "#26364B",
        "ink-softer": "#31435A",
        paper: "#F6EFE1",
        "paper-dim": "#EDE3CE",
        marigold: "#E8A33D",
        "marigold-bright": "#F4B85A",
        clay: "#C9614F",
        sage: "#6F8B6E",
        "aiki-ink": "#161D24",
        "aiki-ink-soft": "#202A34",
        "aiki-steel": "#3E5364",
        "aiki-paper": "#F4F6F5",
        "aiki-paper-dim": "#E7EBEA",
        "aiki-accent": "#FF6B35",
        "aiki-accent-bright": "#FF8659",
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
