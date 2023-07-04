/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        image_blue: {
          100: "rgb(30, 31, 33)"
        }
      }
    },
  },
  plugins: [],
}

