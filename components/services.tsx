'use client';

import { motion } from 'framer-motion';
import { Zap, Sun, Battery, Lightbulb, Shield, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';

const services = [
	{
		icon: Zap,
		title: 'Electrical Installation',
		description:
			'Professional electrical installation services for residential and commercial properties with certified technicians.',
		features: ['Wiring & Rewiring', 'Panel Upgrades', 'Safety Inspections'],
	},
	{
		icon: Sun,
		title: 'Solar Energy Solutions',
		description:
			'Harness the power of the sun with our cutting-edge solar panel installation and maintenance services.',
		features: [
			'Solar Panel Installation',
			'Energy Storage',
			'Grid Integration',
		],
	},
	{
		icon: Battery,
		title: 'Energy Storage Systems',
		description:
			'Advanced battery storage solutions to maximize your energy independence and reduce costs.',
		features: ['Battery Installation', 'Backup Power', 'Load Management'],
	},
	{
		icon: Lightbulb,
		title: 'Smart Home Integration',
		description:
			'Transform your space with intelligent lighting and energy management systems for optimal efficiency.',
		features: ['Smart Lighting', 'Automation', 'Energy Monitoring'],
	},
	{
		icon: Shield,
		title: 'Maintenance & Support',
		description:
			'Comprehensive maintenance plans and 24/7 support to keep your systems running at peak performance.',
		features: ['Regular Inspections', '24/7 Emergency', 'Preventive Care'],
	},
	{
		icon: TrendingUp,
		title: 'Energy Consulting',
		description:
			'Expert analysis and recommendations to optimize your energy consumption and reduce operational costs.',
		features: ['Energy Audits', 'Cost Analysis', 'Efficiency Planning'],
	},
];

export default function Services() {
	return (
		<section
			id="services"
			className="relative py-24 bg-background overflow-hidden .section-padding"
		>
			{/* Decorative elements */}
			<div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 pointer-events-none" />
			<div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
			<div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

			<div className="container mx-auto px-4 relative z-10">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<motion.span
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4"
					>
						Our Services
					</motion.span>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-playfair)] mb-6 text-balance">
						Comprehensive Energy{' '}
						<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
							Solutions
						</span>
					</h2>
					<p className="text-lg text-muted-foreground font-[family-name:var(--font-source-sans)] max-w-2xl mx-auto text-pretty">
						From installation to maintenance, we provide end-to-end
						electrical and energy solutions tailored to your needs
					</p>
				</motion.div>

				{/* Services Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							whileHover={{ y: -8 }}
							className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
						>
							{/* Icon */}
							<motion.div
								whileHover={{ rotate: 360, scale: 1.1 }}
								transition={{ duration: 0.6 }}
								className="w-14 h-14 bg-primary  rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-primary/30 transition-shadow"
							>
								<service.icon className="w-7 h-7 text-white" />
							</motion.div>

							{/* Content */}
							<h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] mb-3 group-hover:text-primary transition-colors">
								{service.title}
							</h3>
							<p className="text-muted-foreground mb-6 leading-relaxed">
								{service.description}
							</p>

							{/* Features */}
							<ul className="space-y-2 mb-6">
								{service.features.map((feature) => (
									<li
										key={feature}
										className="flex items-center text-sm text-muted-foreground"
									>
										<div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
										{feature}
									</li>
								))}
							</ul>

							{/* Hover effect border */}
							<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
						</motion.div>
					))}
				</div>

				{/* CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="text-center"
				>
					<Button
						size="lg"
						className="bg-primary hover:opacity-90 transition-opacity text-white"
					>
						Request a Consultation
					</Button>
				</motion.div>
			</div>
		</section>
	);
}
