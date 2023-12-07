/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "emerald-sm": "3px 3px 0px rgba(16, 185, 129)",
        "emerald-md": "6px 6px 0px rgba(16, 185, 129)",
        "slate-sm": "3px 3px 0px rgba(2, 6, 23)",
        "slate-md": "6px 6px 0px rgba(2, 6, 23)",
        "red-sm": "3px 3px 0px rgba(239, 68,68)",
        "red-md": "6px 6px 0px rgba(239, 68,68)",
        "amber-sm": "2px 2px 0px rgba(245, 158,11)",
        "amber-md": "6px 6px 0px rgba(245, 158,11)",
      },
      dropShadow: {
        "emerald-sm": "1px 1px 0px rgba(16, 185, 129)",
        "emerald-md": "6px 6px 0px rgba(16, 185, 129)",
        "slate-sm": "3px 3px 0px rgba(2, 6, 23)",
        "slate-md": "6px 6px 0px rgba(2, 6, 23)",
        "red-sm": "3px 3px 0px rgba(239, 68,68)",
        "red-md": "6px 6px 0px rgba(239, 68,68)",
        "amber-sm": "2px 2px 0px rgba(245, 158,11)",
        "amber-md": "6px 6px 0px rgba(245, 158,11)",
      },
      keyframes: {
        move: {
          from: { transform: "translateY(-10px)" },
          to: { transform: "translateY(10px)" },
        },
      },
      animation: {
        moving: "move 3s infinite ease alternate;",
      },
    },
  },
  plugins: [],
};
