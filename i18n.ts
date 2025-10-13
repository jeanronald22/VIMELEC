export const locales = ['en', 'fr'] as const; // langues disponibles
export const defaultLocale = 'en'; // langue par défaut

export type Locale = (typeof locales)[number];
