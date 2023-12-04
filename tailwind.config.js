/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "Sans-serif"],
    },
    extend: {
      backgroundImage: {
        "primary-hero-main": "url('./assets/images/primaryHero.svg')",
        "hero-subhead": "url('./assets/images/subheadImg.svg')",
      },
    },
  },
  plugins: [],
};
