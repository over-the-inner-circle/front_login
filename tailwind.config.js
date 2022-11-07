/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'true-gray': "#171717",
        'true-gray-600' : "#52525B",
        'true-green-600' : "#059669",
        'color-42' : "#1fbabc",
        'color-kakao' : "#fce403"
      },
      fontFamily: {
        pressStart: ["PressStart2P", "mono"],
      }
    },
  },
  plugins: [],
}
