import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#edf7ef",
          100: "#d5ead8",
          600: "#2f6f3e",
          700: "#235831",
          800: "#173d25",
          900: "#0b2518"
        },
        banana: "#f4c430",
        earth: "#9a6a35",
        cocoa: "#4b3324"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"]
      },
      boxShadow: {
        premium: "0 24px 80px rgba(11, 37, 24, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
