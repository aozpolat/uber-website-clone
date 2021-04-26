module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        uber: ["Poppins", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        section2:
          "url('https://www.uber-assets.com/image/upload/v1613106985/assets/0e/47aa71-35cb-459a-a975-78c61ea300e2/original/HP-U4B-NYC-bkg.png')",
      }),
      spacing: {
        96: "27rem",
      },
      width: {
        "12/15": "48.5%",
      },
      inset: {
        5.5: "1.4rem",
      },
      height: {
        section1: "854px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
