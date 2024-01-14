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
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        openSans: "'Open Sans', sans-serif",
        nunito: "'Nunito', sans-serif",
      },
    },
  },
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [require("daisyui")],
};
