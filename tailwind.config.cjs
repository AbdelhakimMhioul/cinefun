const defaultTheme = require('tailwindcss/defaultTheme');

const withDefaultFonts = (font) => {
	return [font, ...defaultTheme.fontFamily.sans];
};

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				'os-regular': withDefaultFonts('OpenSans-Regular'),
				'os-bold': withDefaultFonts('OpenSans-Bold'),
				'os-semibold': withDefaultFonts('OpenSans-Semibold'),
				'os-extrabold': withDefaultFonts('OpenSans-Extrabold'),
				'os-light': withDefaultFonts('OpenSans-Light'),
				'os-medium': withDefaultFonts('OpenSans-Medium')
			},
			padding: {
				'1/2': '50%',
				full: '100%'
			}
		}
	},

	plugins: [require('daisyui'), require('@tailwindcss/typography'), require('tailwind-scrollbar')],

	daisyui: {
		themes: [
			{
				light: {
					'primary-content': '#1e293b', // For Text (Headings, Paragraphs, etc.)
					'secondary-content': '#111827', // For Text (Sidebar)
					'base-100': '#f9f9f9', // For Background
					'base-200': '#d4d1cb', // For Background (Sidebar)
					'base-300': '#c1bdbd' // For Background (Hover)
				},
				dark: {
					'primary-content': '#d1e8d8', // For Text (Headings, Paragraphs, etc.)
					'secondary-content': '#c4dfe6', // For Text (Sidebar)
					'base-100': '#07575b', // For Background
					'base-200': '#003B46', // For Background (Sidebar)
					'base-300': '#002837' // For Background (Hover)
				}
			}
		]
	}
};

module.exports = config;
