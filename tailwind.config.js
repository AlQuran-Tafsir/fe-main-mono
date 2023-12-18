/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-blue': '#392467',
      },
      fontSize: {
        '3xs': ['0.5rem','0.55rem'],
        '2xs': ['0.65rem', '0.75rem'],
        '5-5xl': ['3.25rem', '1']
      },
      width: {
        'a4': '210mm',
      },
      fontFamily: {
        'arab': ['"Scheherazade New"'],
        'default': ['Poppins']
      },
    },
  },
  plugins: [],
}

