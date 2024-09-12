/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Public Sans", "sans-serif"],
      },
      colors: {
        fill_primary: "#0D0D0D",
        fill_secondary: "#979797",
        fill_bg_primary: "#EFF2F6",
        text_primary: "#000000",
        text_secondary: "#979797",
      },
      fontSize: {
        h1: ["72px", "80px"],
        h2: ["56px", "62px"],
        h3: ["36px", "42px"],
        h4: ["22px", "30px"],
        h5: ["16px", "22px"],
        p1: ["20px", "28px"],
        p2: ["18px", "26px"],
        p3: ["16px", "26px"],
        p4: ["14px", "20px"],
        btnLarge: ["20px", "28px"],
        btnBig: ["18px", "22px"],
        btnSmall: ["16px", "20px"],
      },
      maxWidth: {
        default: "1120px",
      },
      screens: {
        smh: "300px",
      },
    },
  },
  plugins: [],
};
