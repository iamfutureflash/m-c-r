/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      '100px': '100px',
      xsm: '540px',
      sm: '640px',
      md: '768px',
      mdx: '860px',
      mdxl: '880px',
      lg: '1024px',
      lgx: '1084px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}
