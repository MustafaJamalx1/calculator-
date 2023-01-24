/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        button: "0 5px 0px  #b4a597",
        key: "0 5px 0 #404e72",
      },
      fontFamily: { spartan: ["League Spartan", "sans-serif"] },
    },
  },
  plugins: [],
};
