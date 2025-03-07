/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E07B39",
        primaryContent: "#B6A28E",
        primarySubcontent: "#DCE4C9",
        primaryBase: "#1a202c",
        primaryAccent: "#2d3748",
        primaryBg: "#F5F5DC",
      },
    },
  },
  plugins: [],
};
