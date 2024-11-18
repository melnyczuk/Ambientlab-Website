import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ['gilroy', 'ui-sans-serif', 'system-ui'],
			serif: ['pica', 'ui-serif'],
			mono: ['ui-monospace']
		},
		extend: {}
	},

	plugins: []
} satisfies Config;
