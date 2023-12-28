/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#969696",
        secondary: "#F5F5F5E5",
      },
      backgroundColor: {
        primary: "#969696",
        secondary: ["#F5F5F5E5", "#FFFFFF80"],
        darkpurple: "#6100C2",
        lightpurple: "#7900C2",
      },
      backgroundImage: {
        login: "url('/assets/pages/login/background.jpeg')",
        home: "url('/assets/pages/home/HeroSection.jpeg')",
      },
    },
  },
  plugins: [],
};
