import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "inman-blue": "#0a84ff",
        "inman-dark": "#161a48",
        "inman-red": "#da3832",
        "submit-blue": "#007bb3",
        "near-black": "#232323",
        "medium-gray": "#444444",
        "light-gray": "#f3f3f3",
        "light-blue-wash": "#eff8fb",
        "border-gray": "#d3d3d3",
        "error-red": "#fd5e4d",
      },
      fontFamily: {
        sans: ["var(--font-hex-franklin)", "system-ui", "sans-serif"],
        serif: ["var(--font-harriet)", "Georgia", "serif"],
        display: ["var(--font-tungsten)", "var(--font-hex-franklin)", "sans-serif"],
      },
      borderRadius: {
        btn: "9999px",
        card: "15px",
        none: "0px",
      },
      boxShadow: {
        elevated: "6px 6px 9px rgba(0,0,0,0.2)",
      },
      letterSpacing: {
        cta: "0.04em",
        display: "-0.02em",
      },
    },
  },
  plugins: [],
};

export default config;
