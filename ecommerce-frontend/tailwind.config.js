/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderColor: {
        border: "#ccc", // define the border color
      },
      backgroundColor: {
        background: "#f9f9f9", // define the background color
      },
      textColor: {
        foreground: "#333", // define the text color
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
