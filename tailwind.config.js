/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        trap: ["Space Grotesk, sans-serif"],
        code: ["IBM Plex Mono, courier-new"],
        tech: ["Kanit, sans-serif"],
      },
      colors: {
        primary: "#1D3557",
        secondary: "#FF6F61",
        ownBlack: "#000000",
        ownWhite: "#FAFAFA",
        background: "#E6F5E8",
      },
    },
  },
  plugins: [],
};
