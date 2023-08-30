import type { Config } from "tailwindcss";

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          sm: "1.25rem",
          md: "1.5rem",
          xl: "2rem",
        },
      },
      colors: {
        dark: "#1E1E1E",
        dark_gray: "#6E6E6E",
        gray: "#8C8C8C",
        gray_light: "#C7C7C7",
        white_gray: "#DFDEDE",
        gray_transparent: "rgba(29, 29, 29, 0.34)",
        accent: "#5364FA",
        error: "#E25252",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
