/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',

	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				sm: '375px',
				md: '768px',
				lg: '976px',
				xl: '1440px',
			},
			colors: {
				darkBlue: 'hsl(209, 23%, 22%)',
				veryDarkBlue: 'hsl(207, 26%, 17%)',
				veryDarkBlueText: 'hsl(200, 15%, 8%)',
				darkGray: 'hsl(0, 0%, 52%)',
				veryLightGray: 'hsl(0, 0%, 98%)',
				White: 'hsl(0, 0%, 100%)',
			},
			fontFamily: {
				body: ['Nunito Sans'],
			},
		},
	},
	plugins: [],
};
