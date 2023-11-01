/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
     colors: {
      'white': '#FFFFFF',
      'black': '#181818',
      'dark-gray': '#A9A9A9',
      'light-gray': '#E7E7E7',
      'cream': '#FAF2EB',
      'brown': '#A06029',
      'bright-brown': "#AC570D"

    },
    fontFamily: {
      'display': ['Unbounded', 'cursive'],
      'satoshi': ['var(--font-satoshi)'],
      
    },
    fontSize: {
      'display': ['clamp(3.5rem, 10vw, 14rem)', {lineHeight: '100%'}],
      'footer-display': ['clamp(3rem, 7.45vw, 10rem)', {lineHeight: '100%'}],
      '5xl': ['4.75rem', {lineHeight: '115%'}],
      '4xl': ['3.8rem', {lineHeight: '115%'}],
      '3xl': ['3.05rem', {lineHeight: '115%'}],
      '2xl': ['2.45rem', {lineHeight: '115%'}],
      'xl': ['1.950rem', {lineHeight: '115%'}],
      'lg': ['1.55rem', {lineHeight: '115%'}],
      'md': ['1.25rem', {lineHeight: '150%'}],
      'base': ['1rem', {lineHeight: '150%'}],
      'sm': ['0.8rem', {lineHeight: '150%'}],
      'xs': ['0.65rem', {lineHeight: '150%'}],
    },
    lineHeight: {
      'tight': ['115%'],
      'loose': ['150%'],
    },
    letterSpacing: {
      'global': ['-2%']
    },
    extend: {
      
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}
