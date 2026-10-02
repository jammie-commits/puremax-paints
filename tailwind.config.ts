import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#10100f",
        gold: "#c99a43",
        cyan: "#27b8d2",
      },
    },
  },
  plugins: [],
};

export default config;
