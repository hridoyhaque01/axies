/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/preline/dist/*.js"],
  theme: {
    // extend: {},

    colors: {
      transparent: "transparent",
      darkHigh: "#14141F",
      darkSemi: "#12121c",
      darkMid: "#1F1F2C",
      pureWhite: "#fff",
      primaryColor: "#5142FC",
      errorColor: "#DF4949",

      navyDark: "#393672",

      testColor: "#ccddec",
    },

    fontFamily: {
      urbanist: ["Urbanist", "sans-serif"],
    },
  },
  plugins: [require("preline/plugin")],
};
