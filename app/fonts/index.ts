import {Inter} from 'next/font/google';
import {NextFont} from 'next/dist/compiled/@next/font';
import localFont from 'next/font/local';

export const inter: NextFont = Inter({
	subsets: ['latin'],
});

export const clashGrotesk: NextFont = localFont({
	src: [
		{
			path: './ClashGrotesk/ClashGrotesk-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: './ClashGrotesk/ClashGrotesk-Semibold.woff2',
			weight: '600',
			style: 'normal',
		},
	],
});
