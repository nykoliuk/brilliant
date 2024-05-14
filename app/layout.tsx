import type {Metadata} from 'next';
import './global.css';
import {ReactNode} from 'react';
import {inter} from '@/app/fonts';

export const metadata: Metadata = {
	title: 'Brilliant Test',
	description: 'Brilliant Test Description',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
