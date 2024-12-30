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
        spin: "spin 25s linear infinite", // Custom spin animation
        "slide-fade": "slideFade 0.7s ease-out forwards",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        slideFade: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0.5",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
