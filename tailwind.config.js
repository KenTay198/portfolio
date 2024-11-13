/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode : "class",
  theme: {
    extend: {
      textShadow: {
        DEFAULT: "1px 1px 3px black",
      },
      colors: {
        primary: "#0b3142",
        primaryDark: "#092937",
        secondary: "#F6FCFF",
        accent: "#E1BB80",
        accentDark: "#BD9F70",
        
      },
      flex : {
        "2" : "2 2 0%"
      }
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
