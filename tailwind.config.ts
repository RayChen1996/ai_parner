import type { Config } from "tailwindcss";
import daisyui from "daisyui";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customGrayLight: "#F0F0F0",
        customGray: "#808080",
        customBlack: "#000000",
        customWhite: "#FFFFFF",
        customRed: "#E6553B",
        primary: "#7000FF",
        secondary: "#11002D",
        accent: "#6E01F8",
        neutral: "#1F0F39",
        "base-100": "#FFFFFF",
        info: "#E9E2F3",
        success: "#380C7E",
        warning: "#28085",
        error: "#000000",
      },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  daisyui: {
    themes: [
      "light",
      {
        mytheme: {
          primary: "#7000FF",
          secondary: "#11002D",
          accent: "#6E01F8",
          neutral: "#1F0F39",
          "base-100": "#FFFFFF",
          info: "#E9E2F3",
          success: "#380C7E",
          warning: "#28085",
          error: "#000000",
        },
      },
    ],
  },
  // daisyui: {
  //   themes: [
  //     ["light"],
  //     {
  //       mytheme: {
  //         primary: "#7000FF",
  //         secondary: "#11002D",
  //         accent: "#6E01F8",
  //         neutral: "#1F0F39",
  //         "base-100": "#FFFFFF",
  //         info: "#E9E2F3",
  //         success: "#380C7E",
  //         warning: "#28085",
  //         error: "#000000",
  //       },
  //     },
  //     // other themes...
  //   ],

  //   darkMode: false,
  // },
  plugins: [daisyui],
};
export default config;
