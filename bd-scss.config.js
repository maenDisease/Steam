/** @type {import('bd-scss/lib/config').Config} */
export default {
	meta: {
		name: "Steam",
		author: "maenDisease",
		version: "1.0.0",
		description: "Steam UI on Discord.",
		source: "https://github.com/maenDisease/Steam",
		website: "https://maendisease.github.io/",
		invite: "BShu37e4jg"
	},
	addons: [
		['./src/addons/_horizontalserverlist.scss', 'dist/addons/horizontalserverlist.css'],
	]
}