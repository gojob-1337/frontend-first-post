module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        128: "32rem",
      },
      fontFamily: {
        nunito: ["calibri", "sans-serif"],
      },
      colors: {
        blue: {
          dark: "rgb(29 90 156)",
        },
        green: "rgb(51 214 112)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
