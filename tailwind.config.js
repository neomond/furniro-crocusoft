/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "Sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-subhead": "url('/src/assets/images/subheadImg.svg')",
      },
    },
  },
  plugins: [],
};
