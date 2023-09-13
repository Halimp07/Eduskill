/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Inter: "Inter",
    },
    extend: {
      fontSize: {
        'mini' : "12px",
        'extra-mini' : "11.5px",
        'tiny' : "10px",
        'mono' : "8px",
      },
      backgroundImage: {
        'eduskill_1' : "url('./assets/bg_text_hero_eduskill_1.png')",
      },
      backgroundSize: {
        'size-eduskill_1': '40%',
      },
      colors: {
        Teal: "#2F6C6D",
        yellow: "#e4d63b",
        Solitude: "#FFFFFF",
        gray: "#4B4B4C",
        White_Primary: "#EAECF0",
        Black_Primary: "#101828",
        Orange_Primary: "#FF7B00",
        Orange_Secondary: "#FF7B00",
        Orange_Teritiary: "#F8A62B"
      },
      animation: {
        slide: "slide 25s linear infinite"
      },
      keyframes: {
        slide: {
          "0%,100%" : {transform: "translateX(5%)"},
          "50%": {transform: "translateX(-120%)"}
        }
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}