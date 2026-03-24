import LoadMessage from '@/components/LoadMessage';
import { Analytics } from '@vercel/analytics/next';
import { Loader2 } from 'lucide-react';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Inter, Outfit } from 'next/font/google';
import Script from 'next/script';
import type React from 'react';
import { Suspense } from 'react';
import '../globals.css';

const outfit = Outfit({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-outfit',
});

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600'],
	variable: '--font-inter',
});

export const metadata: Metadata = {
	metadataBase: new URL('https://vimelec.vercel.app'),
	title: {
		default: 'VIMELEC | Ingénierie, Électricité & Technologie Digitale',
		template: '%s | VIMELEC',
	},
	description:
		"Votre partenaire B2B en ingénierie au Cameroun. VIMELEC allie expertise électrique, domotique et développement technologique pour des infrastructures performantes et connectées.",
	keywords: [
		'ingénierie électrique Cameroun',
		'solutions technologiques Douala',
		'développement logiciel',
		'transformation digitale',
		'maintenance industrielle',
		'installation solaire',
		'domotique',
		'VIMELEC',
	],
	authors: [{ name: 'VIMELEC' }],
	creator: 'VIMELEC',
	publisher: 'VIMELEC',
	openGraph: {
		title: 'VIMELEC | Ingénierie, Énergie & Innovation Digitale',
		description:
			"Au Cameroun, VIMELEC fusionne le savoir-faire électrique à l'innovation logicielle pour offrir des infrastructures modernes et optimisées pour les entreprises.",
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
		title: 'VIMELEC | Énergie & Solutions Technologiques',
		description:
			"Découvrez nos services B2B : Ingénierie électrique, installations solaires, domotique et développement technologique sur mesure.",
		images: ['/images/og-vimelec.jpeg'],
		creator: '@vimelec',
	},
	alternates: {
		canonical: 'https://vimelec.vercel.app',
		languages: {
			en: 'https://vimelec.vercel.app/en',
			fr: 'https://vimelec.vercel.app/fr',
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
								"VIMELEC accompagne les entreprises avec des solutions expertes en ingénierie, maintenance électrique, et développement technologique au Cameroun.",
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
				className={`font-sans ${inter.variable} ${outfit.variable}`}
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
