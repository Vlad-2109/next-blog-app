import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import '../styles/globals.css';

const outfit = Outfit({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
	title: 'Blog App',
	description: 'Generated by create next app',
	icons: {
		icon: '/icon.png',
	},
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={outfit.className}>{children}</body>
		</html>
	);
}
