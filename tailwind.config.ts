import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#576238",
        },
        secondary: {
          DEFAULT: "#FFD95D",
        },
        accent: {
          DEFAULT: "#98473E",
        },
        base: {
          DEFAULT: "#F0EADC",
        },
        muted: {
          DEFAULT: "#07090F",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

