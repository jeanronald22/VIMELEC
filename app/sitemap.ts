import type { MetadataRoute } from 'next';

const BASE_URL = 'https://vimelec.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
	const locales = ['fr', 'en'];
	const lastModified = new Date();

	return locales.map((locale) => ({
		url: `${BASE_URL}/${locale}`,
		lastModified,
		changeFrequency: 'monthly' as const,
		priority: 1,
		alternates: {
			languages: {
				fr: `${BASE_URL}/fr`,
				en: `${BASE_URL}/en`,
			},
		},
	}));
}
