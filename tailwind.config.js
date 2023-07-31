/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E11756",
        secondary: "#FCCC0A",
        heroText: "#BFC1C2",
        bg: "#fff",
        dark: "#020",
      },
    },
  },
  plugins: [],
};
