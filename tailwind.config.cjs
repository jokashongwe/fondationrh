/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Gilda Display",
      secondary: "Barlow",
      tertiary: "Barlow Condensed",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1140px",
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        secondary: "#FBA834",
        accent: {
          DEFAULT: "#FBA834",
          hover: "#967142",
        },
      },
      backgroundImage: {
        room: "url('/assets/room.jpg')",
      },
    },
  },
  plugins: [],
};
