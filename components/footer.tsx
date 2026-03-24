'use client';

import { motion } from 'framer-motion';
import {
	Mail,
	MapPin,
	Phone,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
	const t = useTranslations('Footer');
	const currentYear = new Date().getFullYear();

	// 🔹 Company Links
	const companyLinks = [
		{
			name: t('companyLinks.about.name'),
			href: t('companyLinks.about.href'),
		},
		{
			name: t('companyLinks.services.name'),
			href: t('companyLinks.services.href'),
		},
		{
			name: t('companyLinks.recentWorks.name'),
			href: t('companyLinks.recentWorks.href'),
		},
	];

	// 🔹 Services Links
	const servicesLinks = [
		{
			name: t('servicesLinks.electrical.name'),
			href: t('servicesLinks.electrical.href'),
		},
		{
			name: t('servicesLinks.it.name'),
			href: t('servicesLinks.it.href'),
		},
		{
			name: t('servicesLinks.solar.name'),
			href: t('servicesLinks.solar.href'),
		},
		{
			name: t('servicesLinks.maintenance.name'),
			href: t('servicesLinks.maintenance.href'),
		},
	];

	// 🔹 Legal Links
	const legalLinks = [
		{
			name: t('legalLinks.privacy.name'),
			href: t('legalLinks.privacy.href'),
		},
		{ name: t('legalLinks.terms.name'), href: t('legalLinks.terms.href') },
	];

	// 🔹 Contact Info
	const contactInfo = [
		{ icon: Phone, text: t('contactInfo.phone') },
		{ icon: Mail, text: t('contactInfo.email') },
		{ icon: MapPin, text: t('contactInfo.address') },
	];

	return (
		<footer className="relative bg-gradient-to-b from-background to-muted/30 border-t border-border/50">
			{/* Decorative top border */}
			<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
					{/* Brand Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="lg:col-span-2"
					>
						<Link
							href="/"
							className="flex items-center gap-2 mb-4 group"
						>
							<span className="text-2xl font-bold font-serif bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
								VIMELEC
							</span>
						</Link>

						<p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
							{t('footerDescription')}
						</p>

						{/* Contact Info */}
						<div className="space-y-3">
							{contactInfo.map((item, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.5,
										delay: index * 0.1,
									}}
									className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									<item.icon className="h-4 w-4 text-primary" />
									<span>{item.text}</span>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Company Links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						<h3 className="font-semibold text-foreground mb-4">
							{t('companyTitle')}
						</h3>
						<ul className="space-y-3">
							{companyLinks.map((link, index) => (
								<li key={index}>
									<Link
										href={link.href}
										className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
									>
										<span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300" />
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Services Links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<h3 className="font-semibold text-foreground mb-4">
							{t('servicesTitle')}
						</h3>
						<ul className="space-y-3">
							{servicesLinks.map((link, index) => (
								<li key={index}>
									<Link
										href={link.href}
										className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
									>
										<span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300" />
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Legal Links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.3 }}
					>
						<h3 className="font-semibold text-foreground mb-4">
							{t('legalTitle')}
						</h3>
						<ul className="space-y-3">
							{legalLinks.map((link, index) => (
								<li key={index}>
									<Link
										href={link.href}
										className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
									>
										<span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300" />
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</motion.div>
				</div>

				{/* Bottom Bar */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.5 }}
					className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
				>
					<p>
						© {currentYear} VIMELEC. {t('copyright')}
					</p>
					<div className="flex items-center gap-2">
						<a href="mailto:vimelec.tech@gmail.com">
							<span>{t('poweredBy')}</span>
						</a>
					</div>
				</motion.div>
			</div>

			{/* Decorative bottom gradient */}
			<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
		</footer>
	);
}
