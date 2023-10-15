/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        DEFAULT: "1px 1px 3px black",
      },
      colors: {
        primary: "#0b3142",
        secondary: "#ead1a9",
        "secondary-0.5": "rgba(234,209,169,0.5)",
        "secondary-0.8": "rgba(234,209,169,0.8)",
        primaryAlt: "#092937",
        secondaryAlt: "#e1bb80",
        "secondaryAlt-0.5": "rgba(225,187,128,0.5)",
        "secondaryAlt-0.8": "rgba(225,187,128,0.8)",
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
