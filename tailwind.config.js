/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}", "./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "dark-background": "url('/src/assets/background-dark.jpg')", // Dark mode
      },
    },
  },
  plugins: [],
};
