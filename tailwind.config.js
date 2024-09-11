/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            eng: ["MinSansVF", "sans-serif"],
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
