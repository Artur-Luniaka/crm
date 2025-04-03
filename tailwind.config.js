/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mdx: "1440px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          mdx: "1rem",
        },
      },
      fontFamily: {
        inter: ["Inter"],
        jakarta: ["Plus Jakarta Sans"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
