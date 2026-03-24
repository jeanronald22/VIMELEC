'use client';

import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import LanguageSwitcher from './ChangeLang';

export function NavBar() {
	const t = useTranslations('Nav');
	const [isOpen, setIsOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('home');
	const [scrolled, setScrolled] = useState(false);

	const navItems = useMemo(
		() => [
			{ name: t('home'), href: '#home', id: 'home' },
			{ name: t('about'), href: '#about', id: 'about' },
			{ name: t('services'), href: '#services', id: 'services' },
			{ name: t('works'), href: '#works', id: 'works' },
			{ name: t('contact'), href: '#contact', id: 'contact' },
		],
		[t]
	);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
			const current = navItems.find((item) => {
				const element = document.getElementById(item.id);
				if (element) {
					const rect = element.getBoundingClientRect();
					return rect.top <= 100 && rect.bottom >= 100;
				}
				return false;
			});
			if (current) setActiveSection(current.id);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [navItems]);

	return (
		<motion.nav
			className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border/40 transition-colors duration-300 ${
				scrolled ? 'bg-background/80' : 'bg-transparent'
			}`}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20">
					{/* Logo */}
					<motion.div
						className="flex items-center "
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<Link
							href="/"
							className="text-2xl font-bold font-heading text-primary"
						>
							VIMELEC
						</Link>
					</motion.div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-1">
						{navItems.map((item, index) => (
							<motion.a
								key={item.id}
								href={item.href}
								className="relative px-4 py-2 text-sm font-medium font-sans text-foreground/80 transition-colors hover:text-primary"
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.5,
									delay: 0.1 * index,
								}}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								{item.name}
								{activeSection === item.id && (
									<motion.div
										className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
										layoutId="activeSection"
										transition={{
											duration: 0.3,
											ease: [0.22, 1, 0.36, 1],
										}}
									/>
								)}
							</motion.a>
						))}
					</div>

					{/* Right Side Actions */}
					<div className="hidden md:flex items-center gap-4">
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.6 }}
						>
							<ModeToggle />
							<LanguageSwitcher />
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.7 }}
						>
							<Link href="/#contact" scroll={true}>
								<Button
									className="bg-accent text-accent-foreground rounded-full px-6 hover:bg-accent/90 font-semibold shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 hover:-translate-y-[2px]"
									size="default"
								>
									{t('quote')}
								</Button>
							</Link>
						</motion.div>
					</div>

					{/* Mobile Menu Button */}
					<div className="flex md:hidden items-center gap-3">
						<ModeToggle />
						<LanguageSwitcher />

						<motion.button
							onClick={() => setIsOpen(!isOpen)}
							className="p-2 rounded-lg hover:bg-muted transition-colors"
							whileTap={{ scale: 0.9 }}
							aria-label="Toggle menu"
						>
							<AnimatePresence mode="wait">
								{isOpen ? (
									<motion.div
										key="close"
										initial={{ rotate: -90, opacity: 0 }}
										animate={{ rotate: 0, opacity: 1 }}
										exit={{ rotate: 90, opacity: 0 }}
										transition={{ duration: 0.2 }}
									>
										<X className="h-6 w-6" />
									</motion.div>
								) : (
									<motion.div
										key="menu"
										initial={{ rotate: 90, opacity: 0 }}
										animate={{ rotate: 0, opacity: 1 }}
										exit={{ rotate: -90, opacity: 0 }}
										transition={{ duration: 0.2 }}
									>
										<Menu className="h-6 w-6" />
									</motion.div>
								)}
							</AnimatePresence>
						</motion.button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						className="md:hidden border-t border-border/40 bg-card/95 backdrop-blur-lg"
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{
							duration: 0.3,
							ease: [0.22, 1, 0.36, 1],
						}}
					>
						<div className="px-4 py-6 space-y-3">
							{navItems.map((item, index) => (
								<motion.a
									key={item.id}
									href={item.href}
									className="block px-4 py-3 rounded-lg text-base font-medium font-sans text-foreground/80 hover:text-primary hover:bg-muted transition-all"
									onClick={() => setIsOpen(false)}
									initial={{ x: -20, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									exit={{ x: -20, opacity: 0 }}
									transition={{
										duration: 0.3,
										delay: index * 0.05,
									}}
									whileTap={{ scale: 0.98 }}
								>
									{item.name}
								</motion.a>
							))}
							<motion.div
								initial={{ x: -20, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: -20, opacity: 0 }}
								transition={{
									duration: 0.3,
									delay: navItems.length * 0.05,
								}}
							>
								<Link
									href="/#contact"
									scroll={true}
									onClick={() => setIsOpen(false)}
								>
									<Button
										className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-lg"
										size="lg"
									>
										{t('quote')}
									</Button>
								</Link>
							</motion.div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
}
