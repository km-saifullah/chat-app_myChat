/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1320px",
      },
      colors: {
        headingColor: "#11175D",
        blackColor: "#000000",
        whiteColor: "#ffffff",
        "btn-bg": "#5F35F5",
        secondary: "#03014C",
        textColor: "#4D4D4D",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        openSans: "'Open Sans', sans-serif",
        nunito: "'Nunito', sans-serif",
      },
      boxShadow: {
        "3xl": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [require("daisyui")],
};
