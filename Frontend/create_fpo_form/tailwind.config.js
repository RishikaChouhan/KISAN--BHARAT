/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lg: "var(--lg)",
        "light-grey": "var(--light-grey)",
        primary: "var(--primary)",
      },
    },
  },
  plugins: [],
};
