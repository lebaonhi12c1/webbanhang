/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#30a9de",
                dark_primary: "#0f4c75",
                light_primary: "#30a9de",
                secondary: '#e53a40',
                dark_secondary: '#ad0005',
                three: '#f2f2f2',
                dark: '#000000',
                light_dark: '#707076',
                light: '#ffffff',
                text_sub: '#b3b3b3'
            },
        },
    },
    plugins: [],
};
// 30a9de