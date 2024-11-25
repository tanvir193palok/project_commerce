/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    fontFamily: {
      primary: ["pacifico", "s"],
    },
    extend: {
      colors: {
        background: "#F5F3FF",
        primary: "#8F71E1",
      },
    },
  },
  plugins: [],
};
