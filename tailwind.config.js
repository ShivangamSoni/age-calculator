/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "hsl(259, 100%, 65%)",
                error: "hsl(0, 100%, 67%)",
                neutral: {
                    white: {
                        50: "hsl(0, 0%, 100%)",
                        100: "hsl(0, 0%, 94%)",
                    },
                    grey: {
                        200: "hsl(0, 0%, 86%)",
                        300: "hsl(0, 1%, 44%)",
                    },
                    black: "hsl(0, 0%, 8%)",
                },
            },
            fontFamily: {
                primary: "'Poppins', sans-serif;",
            },
        },
    },
    plugins: [],
};
