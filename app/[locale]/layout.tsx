import LoadMessage from '@/components/LoadMessage';
import { Analytics } from '@vercel/analytics/next';
import { Loader2 } from 'lucide-react';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Playfair_Display, Source_Sans_3 } from 'next/font/google';
import Script from 'next/script';
import type React from 'react';
import { Suspense } from 'react';
import '../globals.css';

const playfair = Playfair_Display({
	subsets: ['latin'],
	weight: ['700'],
	variable: '--font-playfair',
});

const sourceSans = Source_Sans_3({
	subsets: ['latin'],
	weight: ['400', '600'],
	variable: '--font-source-sans',
});

export const metadata: Metadata = {
	metadataBase: new URL('https://vimelec.vercel.app'),
	title: {
		default: 'VIMELEC | Vente, Ingénierie et Maintenance Électriques',
		template: '%s | VIMELEC',
	},
	description:
		"VIMELEC est une entreprise spécialisée dans la vente, l'ingénierie et la maintenance électriques au Cameroun. Nous proposons des solutions durables pour les particuliers et les entreprises.",
	keywords: [
		'électricité Cameroun',
		'maintenance électrique',
		'ingénierie énergétique',
		'panneaux solaires',
		'installation électrique',
		'VIMELEC',
		'électricien Douala',
	],
	authors: [{ name: 'VIMELEC' }],
	creator: 'VIMELEC',
	publisher: 'VIMELEC',
	openGraph: {
		title: 'VIMELEC | Vente, Ingénierie et Maintenance Électriques',
		description:
			"Entreprise d'électricité au Cameroun — VIMELEC fournit des services professionnels d’installation, de maintenance et d’ingénierie électrique pour particuliers et entreprises.",
		url: 'https://vimelec.vercel.app',
		siteName: 'VIMELEC',
		locale: 'fr_FR',
		type: 'website',
		images: [
			{
				url: '/images/og-vimelec.jpeg',
				width: 1200,
				height: 630,
				alt: 'VIMELEC — Électricité, Ingénierie et Maintenance',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'VIMELEC | Ingénierie et Maintenance Électriques',
		description:
			'Solutions électriques fiables au Cameroun : installation, ingénierie, maintenance. Découvrez les services professionnels de VIMELEC.',
		images: ['/images/og-vimelec.jpeg'],
		creator: '@vimelec',
	},
	alternates: {
		canonical: 'https://vimelec.vercel.app',
		languages: {
			en: 'https://vimelec.vercel.app/en',
			fr: 'https://vimelec.vercel.app/fr',
			it: 'https://vimelec.vercel.app/it',
			zh: 'https://vimelec.vercel.app/zh',
		},
	},
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
				<Script
					id="json-ld"
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'LocalBusiness',
							name: 'VIMELEC',
							image: 'https://vimelec.vercel.app/images/og-vimelec.jpeg',
							'@id': 'https://vimelec.vercel.app',
							url: 'https://vimelec.vercel.app',
							telephone: '+237693455423',
							address: {
								'@type': 'PostalAddress',
								streetAddress: 'Douala, Cameroun',
								addressLocality: 'Douala',
								addressCountry: 'CM',
							},
							description:
								"VIMELEC offre des services professionnels d'ingénierie, d'installation et de maintenance électrique au Cameroun.",
							openingHours: 'Mo-Fr 08:00-17:00',
							priceRange: '$$',
						}),
					}}
				/>
				<meta
					name="google-site-verification"
					content="Cpo6dOTwoPlYUk5HWf_wG5ZdjSQhMMzjvGQVqyLpwTs"
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
