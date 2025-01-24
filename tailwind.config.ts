import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 1s ease-out',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "dark-purple": "#1F2041",
        "purple": "#4B3F72",
        "yellow": "#FFC857",
        "teal": "#119DA4",
        "blue": "#19647E",
      },
    },
  },
  plugins: [],
} satisfies Config;
