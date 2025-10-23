import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
	locales: ['en', 'fr'],
	defaultLocale: 'fr',
	localePrefix: 'never',
});

export const config = {
	matcher: ['/((?!_next|favicon.ico|public|images|projects|sitemap).*)'],
};
