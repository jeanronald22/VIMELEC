'use client';

import { useState, useEffect } from 'react';
import {
	motion,
	AnimatePresence,
	useScroll,
	useTransform,
} from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';

const navItems = [
	{ name: 'Home', href: '#home' },
	{ name: 'About', href: '#about' },
	{ name: 'Services', href: '#services' },
	{ name: 'Recent Works', href: '#works' },
	{ name: 'Contact', href: '#contact' },
];

export function NavBar() {
	const [isOpen, setIsOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('home');
	const { scrollY } = useScroll();

	// Transform scroll position to navbar background opacity
	const navBackground = useTransform(
		scrollY,
		[0, 100],
		['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0)']
	);

	useEffect(() => {
		const handleScroll = () => {
			const sections = navItems.map((item) => item.href.substring(1));
			const current = sections.find((section) => {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					return rect.top <= 100 && rect.bottom >= 100;
				}
				return false;
			});
			if (current) setActiveSection(current);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<motion.nav
				className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border/40"
				style={{
					backgroundColor: navBackground,
				}}
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
							<span className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-primary">
								VIMELEC
							</span>
						</motion.div>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center gap-1">
							{navItems.map((item, index) => (
								<motion.a
									key={item.name}
									href={item.href}
									className="relative px-4 py-2 text-sm font-medium font-[family-name:var(--font-source-sans)] text-foreground/80 transition-colors hover:text-primary"
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
									{activeSection ===
										item.href.substring(1) && (
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
							</motion.div>
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.7 }}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Button
									className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
									size="lg"
								>
									Get a Free Quote
								</Button>
							</motion.div>
						</div>

						{/* Mobile Menu Button */}
						<div className="flex md:hidden items-center gap-3">
							<ModeToggle />
							<motion.button
								onClick={() => setIsOpen(!isOpen)}
								className="p-2 rounded-lg hover:bg-muted transition-colors"
								whileTap={{ scale: 0.9 }}
							>
								<AnimatePresence mode="wait">
									{isOpen ? (
										<motion.div
											key="close"
											initial={{
												rotate: -90,
												opacity: 0,
											}}
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
										key={item.name}
										href={item.href}
										className="block px-4 py-3 rounded-lg text-base font-medium font-[family-name:var(--font-source-sans)] text-foreground/80 hover:text-primary hover:bg-muted transition-all"
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
									<Button
										className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-lg"
										size="lg"
									>
										Get a Free Quote
									</Button>
								</motion.div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.nav>
		</>
	);
}
