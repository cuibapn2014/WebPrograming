module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "5px 10px 8px 10px #888888",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
