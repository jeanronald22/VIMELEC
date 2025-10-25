import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
	locales: ['en', 'fr', 'zh', 'it'],
	defaultLocale: 'fr',
});

export const config = {
	matcher: ['/((?!_next|favicon.ico|public|images|projects|sitemap).*)'],
};
