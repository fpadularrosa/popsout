/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      variants: {
        animation: ["motion-safe"]
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          // '50%': { opacity: 0.5 },
          "100%": { opacity: 1 }
        }
      },
      backgroundImage: {
        'navbg': "url('../public/backgroundnav.jpg')"
      }
    },
  },
  plugins: [],
}
