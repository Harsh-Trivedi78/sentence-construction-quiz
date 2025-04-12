/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',          // Include index.html file (if using public/index.html in React)
    './src/**/*.{js,jsx,ts,tsx}',  // Include all React component files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
