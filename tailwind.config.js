/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      rotate: {
        '270' : '270deg'
      }
    },
  },
  plugins: [
      require('@tailwindcss/forms'),
      require('tailwind-scrollbar'),
     require('tailwind-scrollbar-hide')
  ],
  mode: process.env.NODE_ENV ? 'jit' : undefined,
}
