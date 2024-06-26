import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // "primary-dark": "#282a36",
        // "second-dark": "#44475a",
        // "base-content": "#f8f8f2",
        // "black-blue": "#6272a4",
        // "primary-cyan": "oklch(var(--p))",
        // "primary-green": "#50fa7b",
        "transparent-green": "rgba(80, 250, 123, 0.50)",
        "transparent-pink": "rgba(255, 121, 198, 0.50)",
        // "accent": "rgba(255, 121, 198, 0.30)",
        // "primary-orange": "#ffb86c",
        // "accent": "#ff79c6",
        // "secondary": "#bd93f9",
        // "error": "#ff5555",
        // "primary-yellow": "#f1fa8c",
      },
      boxShadow: {
        "green-shadow": "0px 0px 40px 45px rgba(80, 250, 123, 0.50)",
        "pink-shadow": "0px 0px 40px 45px rgba(255, 121, 198, 0.50)",
      },
      minHeight: {
        main: "calc(100vh - 80px - 24px)",
      },
    },
  },
  daisyui: {
    themes: [
      "night",
      // {
      //   mytheme: {
      //     primary: "#282a36",

      //     secondary: "#f8f8f2",

      //     accent: "oklch(var(--p))",

      //     neutral: "#ff79c6",

      //     "base-100": "#44475a",

      //     info: "#0000ff",

      //     success: "#50fa7b",

      //     warning: "#f1fa8c",

      //     error: "#ff5555",
      //   },
      // },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
