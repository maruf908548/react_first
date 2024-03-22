module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        blue_gray: { 50: "#f1f1f1", 800: "#323c47", 900: "#343434" },
        indigo: { 500: "#4340da", A700: "#0832de" },
        gray: { 100: "#f6f6f6", 400: "#c4c4c4", 600: "#7c7c7c", "600_01": "#737373" },
        blue: { 100: "#ced6f8" },
      },
      boxShadow: {},
      fontFamily: { roboto: "Roboto" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
