/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': `radial-gradient(at 52% 15%, hsla(276,61%,61%,1) 0px, transparent 50%),
                           radial-gradient(at 6% 14%, hsla(213,74%,73%,1) 0px, transparent 50%),
                           radial-gradient(at 27% 21%, hsla(167,72%,69%,1) 0px, transparent 50%),
                           radial-gradient(at 20% 38%, hsla(126,91%,61%,1) 0px, transparent 50%),
                           radial-gradient(at 11% 20%, hsla(25,70%,69%,1) 0px, transparent 50%),
                           radial-gradient(at 26% 8%, hsla(289,93%,70%,1) 0px, transparent 50%),
                           radial-gradient(at 6% 45%, hsla(255,83%,70%,1) 0px, transparent 50%)`,
      },
      colors: {
        'custom-bg': '#99ffd5',
      }
    },
  },
  plugins: [],
}

