/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Jost', 'sans']
            },
            colors: {
                primary: '#0b4a9b',
                secondary: '#689ae5',
                tertiary: '#4c4d4b',
            }
        },
    },
    plugins: [],
}

