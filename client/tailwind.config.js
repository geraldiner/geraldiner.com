const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			gray: colors.coolGray,
			indigo: colors.indigo,
			red: colors.rose,
			yellow: {
				DEFAULT: "#E5B417",
			},
			purple: colors.violet,
			pink: colors.pink,
			green: colors.green,
			blue: {
				DEFAULT: "#0081B2",
				dark: "#006A9A",
			},
		},
		extend: {
			listStyleType: {
				"leading-zero": "leading-zero",
			},
			dropShadow: {
				"base": "2px 4px 2px black",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/forms")({
			strategy: "class",
		}),
	],
};
