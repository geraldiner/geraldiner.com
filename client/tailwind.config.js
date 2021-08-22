const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	purge: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		listStyleType: {
			"leading-zero": "leading-zero",
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
