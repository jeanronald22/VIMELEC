'use client';

import { motion } from 'framer-motion';
import { Battery, Lightbulb, Shield, Sun, TrendingUp, Zap, Laptop } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from './ui/button';

export default function Services() {
	const t = useTranslations('Services');

	const services = [
		{
			icon: Zap,
			title: t('electricalInstallation.title'),
			description: t('electricalInstallation.description'),
			features: [
				t('electricalInstallation.feature1'),
				t('electricalInstallation.feature2'),
				t('electricalInstallation.feature3'),
			],
		},
		{
			icon: Sun,
			title: t('solarEnergy.title'),
			description: t('solarEnergy.description'),
			features: [
				t('solarEnergy.feature1'),
				t('solarEnergy.feature2'),
				t('solarEnergy.feature3'),
			],
		},
		{
			icon: Battery,
			title: t('energyStorage.title'),
			description: t('energyStorage.description'),
			features: [
				t('energyStorage.feature1'),
				t('energyStorage.feature2'),
				t('energyStorage.feature3'),
			],
		},
		{
			icon: Lightbulb,
			title: t('smartHome.title'),
			description: t('smartHome.description'),
			features: [
				t('smartHome.feature1'),
				t('smartHome.feature2'),
				t('smartHome.feature3'),
			],
		},
		{
			icon: Shield,
			title: t('maintenance.title'),
			description: t('maintenance.description'),
			features: [
				t('maintenance.feature1'),
				t('maintenance.feature2'),
				t('maintenance.feature3'),
			],
		},
		{
			icon: TrendingUp,
			title: t('energyConsulting.title'),
			description: t('energyConsulting.description'),
			features: [
				t('energyConsulting.feature1'),
				t('energyConsulting.feature2'),
				t('energyConsulting.feature3'),
			],
		},
		{
			icon: Laptop,
			title: t('itServices.title'),
			description: t('itServices.description'),
			features: [
				t('itServices.feature1'),
				t('itServices.feature2'),
				t('itServices.feature3'),
			],
		},
	];

	return (
		<section
			id="services"
			className="relative py-24 bg-background section-padding"
		>
			{/* Décorations */}
			<div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 pointer-events-none" />
			<div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
			<div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

			<div className="max-w-7xl mx-auto w-full relative z-10">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<motion.span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
						{t('sectionTitle')}
					</motion.span>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-balance">
						{t('sectionTitle')}
					</h2>
					<p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto text-pretty">
						{t('sectionSubtitle')}
					</p>
				</motion.div>

				{/* Grid des services */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							whileHover={{ y: -8 }}
							className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300"
						>
							<div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg">
								<service.icon className="w-7 h-7 text-white" />
							</div>
							<h3 className="text-2xl font-bold mb-3">
								{service.title}
							</h3>
							<p className="text-muted-foreground mb-6">
								{service.description}
							</p>
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
						</motion.div>
					))}
				</div>

				{/* CTA */}
				<div className="text-center">
					<Button
						asChild
						size="lg"
						className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1"
					>
						<a href="#contact">{t('cta')}</a>
					</Button>
				</div>
			</div>
		</section>
	);
}
