/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			primary: '#5768C0',
			primaryDark: '#FFFFFF'
		},
		extend: {},
	},
	plugins: [],
	darkMode: 'selector',
}
