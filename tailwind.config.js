/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
  safelist: ['bg-[rgba(255,255,0,0.2)]', 'bg-[rgba(255,0,0,0.2)]'],
}
