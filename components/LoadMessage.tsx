import { NextIntlClientProvider } from 'next-intl';
import type React from 'react';

export default async function LoadMessage({
	locale,
	children,
}: {
	locale: string;
	children: React.ReactNode;
}) {
	console.log(locale);

	const messages = await import(`../messages/${locale}.json`);

	return (
		<NextIntlClientProvider locale={locale} messages={messages?.default}>
			{children}
		</NextIntlClientProvider>
	);
}
