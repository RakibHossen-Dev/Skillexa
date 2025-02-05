// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       boxShadow: {
//         custom: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", // Define your custom shadowbox-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
//       },
//       fontFamily: {
//         quicksand: ["Quicksand", "sans-serif"], // Define Quicksand font family
//       },
//     },
//   },
//   plugins: [require("daisyui")],
// };

module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"], // Define Quicksand font family
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
