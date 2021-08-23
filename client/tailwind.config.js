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
			yellow: colors.amber,
			purple: colors.violet,
			pink: colors.pink,
			green: {
				light: "#60B99A",
				DEFAULT: "#20A89D",
				dark: "#029299",
			},
			blue: {
				DEFAULT: "#235CFA",
			},
		},
		extends: {
			listStyleType: {
				"leading-zero": "leading-zero",
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
