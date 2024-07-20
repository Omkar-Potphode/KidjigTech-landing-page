/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': 'rgba(16, 28, 92, 0.64)',
        'primary': '#6881FF',
        'secondary': "#6A35FF",
      }
    },
  },
  plugins: [],
}

