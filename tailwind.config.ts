import type {Config} from 'tailwindcss';

const config: Config = {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		colors: {
			success: '#40FF75',
			error: '#FF1B44',
			secondary: '#606060',
			gray: '#8F99B0',
		},
		extend: {
			backgroundImage: {
				gradient: 'linear-gradient(106.2deg, #963488 -12.33%, #FC6F32 50.28%, #FF4A59 114.17%)',
			},
			minHeight: {
				'2-screen': '200vh',
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '24px',
			},
			screens: {
				sm: '100%',
				md: '100%',
				lg: '100%',
				xl: '100%',
				'2xl': '1808px',
			},
		},
	},
	plugins: [],
};
export default config;
