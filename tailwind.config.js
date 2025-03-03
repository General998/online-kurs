/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
      },
    },
    fontFamily: {
      primary: "Lato, serif",
    },
    extend: {
      colors: {
        bgPrimary: {
          DEFAULT: "#FF3F3A",
        },
        textPrimary: {
          DEFAULT: "#1E212C",
        },
        textSeconary: {
          DEFAULT: "#424551C",
        },
        bgSecondary: "#E9C6BE",
      },
    },
  },
  plugins: [],
};
