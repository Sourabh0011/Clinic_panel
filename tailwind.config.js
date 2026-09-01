/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1CBCCF",
          50: "#f0fbfb",
          100: "#dcf4f7",
          200: "#E8F0F1",
          300: "#90C6CD",
          400: "#c4e9ed",
          500: "#90c6cd",
          600: "#18a5b6",
          700: "#148694",
          800: "#156c77",
          900: "#165963",
        },
        dark: {
          DEFAULT: "#4C5354",
          800: "#333333",
          900: "#1A1E1F",
        },
        accent: "#333333",
        gray: {
          DEFAULT: "#777F81",
          100: "#f8f9fa",
          200: "#E9ECEF",
          300: "#DCDCDC",
          500: "#777F81",
        },
        cadet: {
          DEFAULT: "#9AB4B7",
          blue: "#9AB4B7",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      borderRadius: {
        "10": "10px",
        "20": "20px",
        "30": "30px",
        "35": "35px",
      },
      boxShadow: {
        card: "0px 2px 40px rgba(8, 70, 78, 0.10)",
        dropdown: "0px 10px 30px rgba(8, 70, 78, 0.12)",
        review: "0px 12px 90px rgba(12, 12, 12, 0.06)",
      },
      maxWidth: {
        "container-md": "1465px",
        "container-lg": "1750px",
      },
    },
  },
  plugins: [],
};
