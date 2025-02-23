import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#4A90E2",
				primarydark: "#357ABD",
				accent: "#F5A623",
				accentLight: "#FACF80",
				background: "#F9F9F9",
				text: "#333333",
			},
			fontSize: {
				h1: "64px",
				h2: "40px",
				h3: "24px",
				subtitle: "24px",
				body: "16px",
				small: "14px",
				preTitle: "10px",
				button: "10px",
				link: "16px",
			},
			fontFamily: {
				poppins: "var(--font-poppins)",
				inter: "var(--font-inter)",
			},
		},
	},
	plugins: [],
} satisfies Config;
