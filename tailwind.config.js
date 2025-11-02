/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6F61', // Sunset Orange
        secondary: '#3AAFA9', // Ocean Blue
        accent: '#79C753', // Caribbean Green
        neutralLight: '#F0E5DA', // Beach Sand
        neutralDark: '#2C7E3C' // Palm Green
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
        accent: ['Pacifico', 'cursive']
      },
      spacing: {
        '0.5': '0.125rem',
        '1': '0.25rem',
        '2': '0.5rem',
        '4': '1rem',
        '6': '1.5rem',
        '8': '2rem',
        '12': '3rem'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem'
        }
      }
    }
  },
  darkMode: 'class',
  plugins: []
}