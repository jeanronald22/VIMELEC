'use client';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
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

	const currentLang = pathname.startsWith('/en') ? 'en' : 'fr';

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					className="h-10 w-10 rounded-full hover:bg-muted/50 transition-colors"
					disabled={isPending}
				>
					<span className="text-xl">
						{currentLang === 'en' ? '🇬🇧' : '🇫🇷'}
					</span>
					<span className="sr-only">Changer de langue / Change language</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="min-w-[140px] p-2 rounded-xl">
				<DropdownMenuItem
					onClick={() => changeLanguage('fr')}
					className="cursor-pointer flex items-center gap-3 p-2 rounded-lg"
				>
					<span className="text-xl">🇫🇷</span>
					<span className="font-medium">Français</span>
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => changeLanguage('en')}
					className="cursor-pointer flex items-center gap-3 p-2 rounded-lg"
				>
					<span className="text-xl">🇬🇧</span>
					<span className="font-medium">English</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
