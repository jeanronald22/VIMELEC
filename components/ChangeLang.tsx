'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
	const router = useRouter();
	const pathname = usePathname();
	const [isPending, startTransition] = useTransition();

	const changeLanguage = (lang: string) => {
		const newPath = pathname.replace(/^\/(fr|en)/, `/${lang}`);
		startTransition(() => {
			router.push(newPath);
		});
	};

	return (
		<div className="relative inline-block text-left">
			<select
				className="border  rounded-md  text-gray-800"
				defaultValue={pathname.startsWith('/fr') ? 'fr' : 'en'}
				onChange={(e) => changeLanguage(e.target.value)}
				disabled={isPending}
			>
				<option value="en">🇬🇧</option>
				<option value="fr">🇫🇷</option>
			</select>
		</div>
	);
}
