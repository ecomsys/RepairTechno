/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./*.html",
        "./src/**/*.{js,ts}"
    ],

    theme: {
        extend: {
            colors: {    // задаем палитру цветов из макета. Испрользовать например text-primary, bg-seconadry и т.д.
                primary: '#FE5364',
                grey: '#62646c',
                black: '#0f172a',
                light: '#f3f3fb',
                yelow: '#FFE942',
            },

            fontFamily: {
                inter: ['Inter', 'sans-serif'],  
                manrope: ['Manrope', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
                jakarta: ['PlusJakartaSans', 'sans-serif']
            },
        },
    },

    plugins: [],
}