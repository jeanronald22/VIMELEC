'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
	Mail,
	Phone,
	MapPin,
	Facebook,
	Twitter,
	Linkedin,
	Instagram,
} from 'lucide-react';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	const footerLinks = {
		company: [
			{ name: 'About Us', href: '#about' },
			{ name: 'Services', href: '#services' },
			{ name: 'Recent Works', href: '#recent-works' },
		],
		services: [
			{ name: 'Solar Installation', href: '#services' },
			{ name: 'Energy Audit', href: '#services' },
			{ name: 'Smart Home', href: '#services' },
			{ name: 'Maintenance', href: '#services' },
		],
		legal: [
			{ name: 'Privacy Policy', href: '#' },
			{ name: 'Terms of Service', href: '#' },
		],
	};

	const socialLinks = [
		{ icon: Facebook, href: '#', label: 'Facebook' },
		{ icon: Twitter, href: '#', label: 'Twitter' },
		{ icon: Linkedin, href: '#', label: 'LinkedIn' },
		{ icon: Instagram, href: '#', label: 'Instagram' },
	];

	const contactInfo = [
		{ icon: Phone, text: '+237 657 613 211' },
		{ icon: Mail, text: 'contact@vimelec.com' },
		{ icon: MapPin, text: 'Yassa, Douala' },
	];

	return (
		<footer className="relative bg-gradient-to-b from-background to-muted/30 border-t border-border/50">
			{/* Decorative top border */}
			<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

			<div className="container mx-auto px-4 py-16">
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
							Powering tomorrow with innovative energy solutions.
							We transform how you consume and manage energy for a
							sustainable future.
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
							Company
						</h3>
						<ul className="space-y-3">
							{footerLinks.company.map((link, index) => (
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
							Services
						</h3>
						<ul className="space-y-3">
							{footerLinks.services.map((link, index) => (
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
							Legal
						</h3>
						<ul className="space-y-3">
							{footerLinks.legal.map((link, index) => (
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

				{/* Social Links */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="flex justify-center gap-4 mb-8 pb-8 border-b border-border/50"
				>
					{socialLinks.map((social, index) => (
						<Link
							key={index}
							href={social.href}
							aria-label={social.label}
							className="group relative"
						>
							<div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
							<div className="relative h-10 w-10 rounded-full border border-border/50 flex items-center justify-center bg-background/50 backdrop-blur-sm group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
								<social.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
							</div>
						</Link>
					))}
				</motion.div>

				{/* Bottom Bar */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.5 }}
					className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
				>
					<p>© {currentYear} VIMELEC. All rights reserved.</p>
					<div className="flex items-center gap-2">
						<span>Powered by</span>
						<span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
							Jean Ronald
						</span>
					</div>
				</motion.div>
			</div>

			{/* Decorative bottom gradient */}
			<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
		</footer>
	);
}
