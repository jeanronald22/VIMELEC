'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, Users, Award } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function AboutUs() {
	const t = useTranslations('AboutUs');

	const features = [
		{
			icon: Zap,
			title: t('features.innovation.title'),
			description: t('features.innovation.description'),
		},
		{
			icon: Shield,
			title: t('features.reliability.title'),
			description: t('features.reliability.description'),
		},
		{
			icon: Users,
			title: t('features.expertise.title'),
			description: t('features.expertise.description'),
		},
		{
			icon: Award,
			title: t('features.excellence.title'),
			description: t('features.excellence.description'),
		},
	];

	return (
		<section
			id="about"
			className=" py-24 lg:py-32 overflow-hidden bg-background .section-padding"
		>
			{/* Background decoration */}
			<div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
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
					{t('badge')}
				</motion.span>
				<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-playfair)] mb-6 text-balance">
					{t('title.line1')}
					<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
						{t('title.line2')}
					</span>
				</h2>
				<p className="text-lg text-muted-foreground font-[family-name:var(--font-source-sans)] max-w-2xl mx-auto text-pretty">
					{t('subtitle')}
				</p>
			</motion.div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Left side - Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.3 }}
							className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-6 text-balance"
						>
							{t('mainTitle.line1')}
							<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
								{t('mainTitle.line2')}
							</span>
						</motion.h2>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed"
						>
							{t('mainDescription')}
						</motion.p>

						{/* Features Grid */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.5 }}
							className="grid grid-cols-2 gap-6 mb-8"
						>
							{features.map((feature, index) => (
								<motion.div
									key={feature.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.5,
										delay: 0.6 + index * 0.1,
									}}
									className="flex flex-col gap-2"
								>
									<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
										<feature.icon className="w-6 h-6 text-primary" />
									</div>
									<h3 className="font-semibold text-foreground">
										{feature.title}
									</h3>
									<p className="text-sm text-muted-foreground leading-relaxed">
										{feature.description}
									</p>
								</motion.div>
							))}
						</motion.div>
					</motion.div>

					{/* Right side - Image */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="relative"
					>
						<div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
							<Image
								src="/images/about-us.jpg"
								alt="EnergyTech team and facilities"
								fill
								className="object-cover"
							/>

							{/* Floating card */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.8 }}
								className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm border border-border rounded-xl p-6 shadow-lg"
							>
								<div className="flex items-center gap-4">
									<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
										<Award className="w-6 h-6 text-primary" />
									</div>
									<div>
										<h4 className="font-semibold text-foreground mb-1">
											{t('card.title')}
										</h4>
										<p className="text-sm text-muted-foreground">
											{t('card.subtitle')}
										</p>
									</div>
								</div>
							</motion.div>
						</div>

						{/* Decorative elements */}
						<div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
						<div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
					</motion.div>
				</div>
			</div>
		</section>
	);
}
