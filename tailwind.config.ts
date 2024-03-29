import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: "480px",
        xss: "380px",
      },
      colors: {
        "cerulean-blue": {
          "50": "#f0f4fd",
          "100": "#e3ebfc",
          "200": "#ccd9f9",
          "300": "#adbff4",
          "400": "#8c9ded",
          "500": "#707ce4",
          "600": "#4a4ed4",
          "700": "#4546bd",
          "800": "#3a3c99",
          "900": "#363a79",
          "950": "#1f1f47",
        },
        silver: {
          "50": "#f7f7f7",
          "100": "#ededed",
          "200": "#dfdfdf",
          "300": "#cbcbcb",
          "400": "#adadad",
          "500": "#999999",
          "600": "#888888",
          "700": "#7b7b7b",
          "800": "#676767",
          "900": "#545454",
          "950": "#363636",
        },

        "black-haze": {
          "50": "#f7f8fa",
          "100": "#eceef2",
          "200": "#d4dae3",
          "300": "#aebacb",
          "400": "#8295ae",
          "500": "#627795",
          "600": "#4e607b",
          "700": "#404d64",
          "800": "#374255",
          "900": "#323a48",
          "950": "#212630",
        },
        christi: {
          "50": "#fbffe5",
          "100": "#f3ffc7",
          "200": "#e6ff95",
          "300": "#d3fe58",
          "400": "#bdf526",
          "500": "#9edc06",
          "600": "#74a700",
          "700": "#5c8506",
          "800": "#4a690b",
          "900": "#3e580f",
          "950": "#1f3201",
        },

        "blue-marguerite": {
          "50": "#ecf0ff",
          "100": "#dde2ff",
          "200": "#c2caff",
          "300": "#9ca6ff",
          "400": "#7577ff",
          "500": "#6c63ff",
          "600": "#5036f5",
          "700": "#452ad8",
          "800": "#3825ae",
          "900": "#312689",
          "950": "#1f1650",
        },

        "pigment-indigo": {
          "50": "#faf3ff",
          "100": "#f3e5ff",
          "200": "#e8cfff",
          "300": "#d7a9ff",
          "400": "#be72ff",
          "500": "#a63cff",
          "600": "#9117ff",
          "700": "#7d08e8",
          "800": "#6a0dbc",
          "900": "#520b8d",
          "950": "#3b0072",
        },

        magnolia: {
          "50": "#f8f0ff",
          "100": "#f3e8ff",
          "200": "#e8d0fe",
          "300": "#d9abfc",
          "400": "#c479f9",
          "500": "#a946ef",
          "600": "#8f26d3",
          "700": "#781caf",
          "800": "#64198f",
          "900": "#561a75",
          "950": "#35044e",
        },
      },
      fontFamily: {
        apercu: "'Apercu', sans-serif",
      },
    },
  },
  plugins: [],
};
export default config;
