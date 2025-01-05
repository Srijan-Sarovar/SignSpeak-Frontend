/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./*.html", './src/*.{.js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#4A90E2',
				'primary-dark': '#3A7BC8',
			},
			fontFamily: {
				primary: 'Inter'
			}
		}
	},
	plugins: [],
};