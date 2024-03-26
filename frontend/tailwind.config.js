/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textBlue: "#1390EA",
        buttonBlue: "#2EA7FE",
        headings: "#EF5221",
        subtitles: "DDDDDD",
      },
      screens: {
        xlg: "1300px",
        lg: "1000px",
        md: "600px",
        sm: "300px",
      },
    },
  },
  plugins: [],
};
