/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}", "./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "dark-background": "url('/src/assets/background-dark.jpg')", // Dark mode
      },
      fontFamily: {
        sans: ["Sour Gummy", "sans-serif"], // Add your new font
      },
      animation: {
        spin: "spin 20s linear infinite", // Custom spin animation
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
