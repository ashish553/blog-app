/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'aquamarine': '#7fffd4',
        'iris': '#9867C5',
        'lavender': 'lavender',
        'lavender-1': '#c4c4f1',
        'lavender-2': '#a0a0eb',
      },
      letterSpacing: {
        'extra-wide': '0.5rem',
      }
    },
  },
  plugins: [],
}