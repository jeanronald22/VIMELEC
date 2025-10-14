import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import '../globals.css';
import { Suspense } from 'react';
import { ThemeProvider } from 'next-themes';
import { Loader2 } from 'lucide-react';
import LoadMessage from '@/components/LoadMessage';

const playfair = Inter({
	subsets: ['latin'],
	weight: ['700'],
	variable: '--font-playfair',
});

const sourceSans = Inter({
	subsets: ['latin'],
	weight: ['400', '600'],
	variable: '--font-source-sans',
});

export const metadata: Metadata = {
	title: {
		default:
			'VIMELEC - Bright Solutions for Dark Problems | Electrical Services',
		template: '%s | Vimelec',
	},
	description:
		'EnergyTech provides professional electrical services including solar panel installation, smart home automation, energy audits, and 24/7 emergency repairs. Trusted by thousands of customers for reliable energy solutions.',
	keywords: [
		'electrical services',
		'solar panel installation',
		'smart home automation',
		'energy audit',
		'emergency electrical repair',
		'EnergyTech',
		'renewable energy',
		'energy efficiency',
		'electrical contractor',
		'power solutions',
	],
	authors: [{ name: 'Jean Ronald MBOUMGNI' }, { name: 'Vimelec' }],
	creator: 'Ronald',
	publisher: 'VIMELEC',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL('https://vimelec.com'),
	alternates: {
		canonical: '/',
	},
	openGraph: {
		title: 'VIMELEC - Bright Solutions for Dark Problems',
		description:
			'Professional electrical services, solar installations, and smart home solutions. Available 24/7 for emergency repairs.',
		url: 'https://vimelec.com',
		siteName: 'VIMELEC',
		images: [
			{
				url: '/images/main-image.jpg',
				width: 1200,
				height: 630,
				alt: 'VIMELC - Professional Energy Solutions',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'VIMELEC - Bright Solutions for Dark Problems',
		description:
			'Professional electrical services, solar installations, and smart home solutions.',
		images: ['/images/main-image.jpg'],
		creator: '@energytech',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png',
	},
	// manifest: '/site.webmanifest', //TODO: a definir
};

export default async function Layout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;

	return (
		<html lang={locale} suppressHydrationWarning>
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'Organization',
							name: 'VIMELEC',
							description:
								'Professional electrical services and energy solutions',
							url: 'https://vimelec.com',
							logo: 'https://vimelec.com/images/logo.png',
							contactPoint: {
								'@type': 'ContactPoint',
								telephone: '+237 657613211',
								contactType: 'customer service',
								areaServed: 'Fr',
								availableLanguage: ['en', 'Fr'],
							},
							sameAs: [
								'https://facebook.com/energytech',
								'https://twitter.com/energytech',
								'https://linkedin.com/company/energytech',
								'https://instagram.com/energytech',
							], //TODO: a definir
							address: {
								'@type': 'PostalAddress',
								streetAddress: '123 Energy Street',
								addressLocality: 'Tech City',
								addressRegion: 'TC',
								postalCode: '12345',
								addressCountry: 'US',
							},
						}),
					}}
				/>
			</head>
			<body
				className={`font-sans ${playfair.variable} ${sourceSans.variable}`}
			>
				<LoadMessage locale={locale}>
					<Suspense
						fallback={
							<div className="w-full h-screen flex justify-center items-center">
								<Loader2 className="spin-in" />
							</div>
						}
					>
						<ThemeProvider
							attribute="class"
							defaultTheme="system"
							enableSystem
							disableTransitionOnChange
						>
							{children}
						</ThemeProvider>
						<Analytics />
					</Suspense>
				</LoadMessage>
			</body>
		</html>
	);
}
