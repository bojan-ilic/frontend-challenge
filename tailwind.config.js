/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#393D3F',
                secondary: '#C5CBD3',
                warning: '#BB342F',
                accent: '#8D6A9F',
            },
            fontFamily: {
                primary: ['"Open Sans"', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
