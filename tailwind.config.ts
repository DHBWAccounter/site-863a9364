import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "#1f1f1f",
        border: "#e5e7eb",
        primary: {
          DEFAULT: "#1e3a5f",
          50: "#f0f4f8",
          100: "#d9e2ec",
          200: "#bcccdc",
          300: "#9fb3c8",
          400: "#829ab1",
          500: "#627d98",
          600: "#486581",
          700: "#334e68",
          800: "#243b53",
          900: "#1e3a5f",
        },
        secondary: {
          DEFAULT: "#2d5a87",
          50: "#f0f6fa",
          100: "#d9e8f1",
          200: "#bcd4e5",
          300: "#8fb8d4",
          400: "#5a9bc2",
          500: "#3d82b0",
          600: "#2d5a87",
          700: "#244a6f",
          800: "#1d3c5a",
          900: "#162f48",
        },
        accent: {
          DEFAULT: "#c9a227",
          50: "#fefbf3",
          100: "#fcf3d6",
          200: "#f8e5a8",
          300: "#f2d47a",
          400: "#e8be4c",
          500: "#d4a832",
          600: "#c9a227",
          700: "#a6851f",
          800: "#836818",
          900: "#614b11",
        },
      },
      fontFamily: {
        serif: ["var(--font-source-serif)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
