/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			primary: '#5768C0',
			primaryDark: '#FFFFFF'
		},
		screens: {
			'mobile': '320px',
			'tablet': '768px',
			'desktop': '1024px',
			'desktop-lg': '1440px'
		},
		extend: {},
	},
	plugins: [],
	darkMode: 'selector',
}
