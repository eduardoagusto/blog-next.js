// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 100s linear infinite",
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: {
              inter: ["Inter", "sans-serif"],
            },
            "*": {
              color: "#e3e3e3",
            },
            "p,li": {
              fontSize: "1rem",
            },
            hr: {
              width: "60%",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
