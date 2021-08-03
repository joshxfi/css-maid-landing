module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      md: { max: "768px" },
    },

    extend: {
      fontFamily: {
        pops: "Poppins, sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
