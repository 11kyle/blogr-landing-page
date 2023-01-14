/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('../src/assets/bg-pattern-intro-mobile.svg'), linear-gradient(to right bottom, #F88D72, #F63A54)",
        "circle-pattern":
          "url('../src/assets/bg-pattern-circles.svg'), linear-gradient(to right bottom, #2E2E3F, #414263)",
      },
    },
  },
  plugins: [],
}
