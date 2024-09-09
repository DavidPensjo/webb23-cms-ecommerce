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
        fill_primary: "#ff6347",
        fill_secondary: "#32cd32",
        fill_bg_primary: "#1e90ff",
        text_primary: "#333333",
        text_secondary: "#ffffff",
      },
      fontSize: {
        h1: ["72px", "80px"],
        h2: ["28px", "36px"],
        h3: ["24px", "32px"],
        h4: ["20px", "28px"],
        h5: ["16px", "24px"],
        h6: ["14px", "20px"],
      },
    },
  },
  plugins: [],
};
