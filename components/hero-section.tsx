'use client';

import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Hero() {
	const t = useTranslations('Hero');
	return (
		<section
			id="home"
			className=" min-h-screen .section-padding flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4 sm:px-6 lg:px-8 "
		>
			<div className="max-w-7xl mx-auto w-full">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Text Content */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
						className="space-y-8"
					>
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.8,
								delay: 0.2,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="text-5xl sm:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-playfair)] text-balance leading-tight"
						>
							<span className="bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent ">
								{t('title.line1')}
							</span>
							<br />
							<span className="text-foreground capitalize">
								{t('title.line2')}
							</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.8,
								delay: 0.4,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="text-lg sm:text-xl text-muted-foreground font-[family-name:var(--font-source-sans)] leading-relaxed text-pretty max-w-xl"
						>
							{t('subtitle')}
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.8,
								delay: 0.6,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="flex flex-wrap gap-4"
						>
							<Button
								size="lg"
								className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-base shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
							>
								{t('buttons.contact')}
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 font-semibold px-8 py-6 text-base transition-all hover:scale-105 bg-transparent"
							>
								{t('buttons.learn')}
							</Button>
						</motion.div>

						{/* Stats */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.8,
								delay: 0.8,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50"
						>
							<div>
								<div className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-primary">
									50+
								</div>
								<div className="text-sm text-muted-foreground font-[family-name:var(--font-source-sans)]">
									{t('stats.projects')}
								</div>
							</div>
							<div>
								<div className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-primary">
									98%
								</div>
								<div className="text-sm text-muted-foreground font-[family-name:var(--font-source-sans)]">
									{t('stats.satisfaction')}
								</div>
							</div>
							<div>
								<div className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-primary">
									24/7
								</div>
								<div className="text-sm text-muted-foreground font-[family-name:var(--font-source-sans)]">
									{t('stats.support')}
								</div>
							</div>
						</motion.div>
					</motion.div>

					{/* Image */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							duration: 0.8,
							delay: 0.3,
							ease: [0.22, 1, 0.36, 1],
						}}
						className="relative"
					>
						<div className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
							<div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 mix-blend-overlay z-10" />
							<Image
								src="/images/main-image.jpg"
								alt="Modern energy solutions with solar panels and sustainable technology"
								fill
								className="object-cover"
								priority
							/>
						</div>

						{/* Floating Card */}
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 0.8,
								delay: 1,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-xl backdrop-blur-sm"
						>
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
									<svg
										className="w-6 h-6 text-primary"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M13 10V3L4 14h7v7l9-11h-7z"
										/>
									</svg>
								</div>
								<div>
									<div className="text-sm font-semibold text-foreground">
										{t('card.title')}
									</div>
									<div className="text-xs text-muted-foreground">
										{t('stats.subtitle')}
									</div>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
