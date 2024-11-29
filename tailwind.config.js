/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./assets/images/more/15.jpg')",
        addHero: "url('./assets/images/more/11.png')",
        banner: "url('./assets/images/more/3.png')",
        main: "url('./assets/images/more/11.png')",
        footer: "url('./assets/images/more/13.jpg')",
      },
      fontFamily: {
        rancho: ["Rancho", "cursive"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
