module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        uber: ["Poppins", "sans-serif"],
      },
      spacing: {
        96: "27rem",
      },
      inset: {
        5.5: "1.4rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
