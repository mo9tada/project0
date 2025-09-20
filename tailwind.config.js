/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(0, 0%, 90%)",
        card: "hsl(0, 0%, 100%)",
        background: "hsl(0, 0%, 98%)",
        foreground: "hsl(0, 0%, 10%)",  // ← add this for text-foreground
        ring: "hsl(220, 80%, 50%)",
      },
    },
  },
  plugins: [],
};