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
			}
		}
	},

	plugins: [require('daisyui'), require('@tailwindcss/typography')],
	daisyui: {
		themes: [
			{
				light: {
					'primary-content': '#1e293b', // For Text (Headings, Paragraphs, etc.)
					'secondary-content': '#111827', // For Text (Sidebar)
					'base-100': '#f9f9f9', // For Background
					'base-200': '#d4d1cb' // For Background (Sidebar)
				},
				dark: {
					'primary-content': '#d1e8d8', // For Text (Headings, Paragraphs, etc.)
					'secondary-content': '#c4dfe6', // For Text (Sidebar)
					'base-100': '#07575b', // For Background
					'base-200': '#003B46' // For Background (Sidebar)
				}
			}
		]
	}
};

module.exports = config;
