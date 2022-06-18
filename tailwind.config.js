/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        DmSans: ["'DM Sans'", "sans-serif"],
       },
       backgroundImage: {
        'hero-pattern': "url('/backgroundHero.svg')",
        'navbar-pattern': "url('/backgroundNavbar.svg')",
        
      }
    },
  },
  plugins: [],
}
