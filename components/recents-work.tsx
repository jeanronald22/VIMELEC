'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';

const projects = [
	{
		title: 'Solar Farm Installation',
		location: 'Cameroon, TOTAL',
		date: 'December 2024',
		description:
			'500kW commercial solar installation with advanced energy storage systems',
		image: '/projects/distrib.jpg',
		category: 'Solar Energy',
		stats: { power: '500kW', panels: '1,200+', savings: '40%' },
	},
	{
		title: 'Smart Office Building',
		location: 'Cameroon, PERENCO RIO DEL REY',
		date: 'November 2024',
		description:
			'Complete electrical retrofit with smart automation and energy monitoring',
		image: '/projects/OIP.jpg',
		category: 'Smart Systems',
		stats: { area: '50,000 sq ft', devices: '300+', efficiency: '35%' },
	},
	{
		title: 'Residential Solar Complex',
		location: 'GABON, SEEG',
		date: 'October 2024',
		description:
			'Multi-home solar installation with community battery storage',
		image: '/projects/R.jpg',
		category: 'Residential',
		stats: { homes: '45', capacity: '250kW', reduction: '60%' },
	},
	{
		title: 'Industrial Power Upgrade',
		location: 'CONGO, TOTOAL',
		date: 'September 2024',
		description:
			'High-voltage electrical system upgrade for manufacturing facility',
		image: '/projects/PROHT.jpg',
		category: 'Industrial',
		stats: { voltage: '480V', uptime: '99.9%', capacity: '2MW' },
	},
	{
		title: 'EV Charging Network',
		location: 'GONGO, PERENCO',
		date: 'August 2024',
		description:
			'Installation of 20 fast-charging stations across commercial district',
		image: '/projects/MHTI-Cellules-1-1.jpg',
		category: 'EV Infrastructure',
		stats: { stations: '20', power: '150kW', vehicles: '500+/day' },
	},
	{
		title: 'Green Campus Initiative',
		location: 'MAURITANIE, SOMELEC',
		date: 'July 2024',
		description:
			'University campus solar and energy efficiency transformation',
		image: '/projects/travaux-changement-transformateur-avec-tgbt-1153x1536.jpg',
		category: 'Education',
		stats: { buildings: '12', solar: '1MW', savings: '$200K/yr' },
	},
];

export default function RecentWorks() {
	return (
		<section
			id="works"
			className="relative py-24 bg-muted/30 overflow-hidden .section-padding"
		>
			{/* Decorative elements */}
			<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
			<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

			<div className="container mx-auto px-4">
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
						Portfolio
					</motion.span>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-playfair)] mb-6 text-balance">
						Start Your Energy{' '}
						<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
							Transformation
						</span>
					</h2>
					<p className="text-lg text-muted-foreground font-[family-name:var(--font-source-sans)] max-w-2xl mx-auto text-pretty">
						Ready to power your future? Contact us today for a free
						consultation and discover how we can help
					</p>
				</motion.div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
						>
							{/* Image */}
							<div className="relative h-64 overflow-hidden">
								<Image
									src={project.image || '/placeholder.svg'}
									alt={project.title}
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
								<div className="absolute top-4 left-4">
									<span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold rounded-full">
										{project.category}
									</span>
								</div>
							</div>

							{/* Content */}
							<div className="p-6">
								<h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] mb-3 group-hover:text-primary transition-colors">
									{project.title}
								</h3>

								<div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
									<div className="flex items-center gap-1">
										<MapPin className="w-4 h-4" />
										{project.location}
									</div>
									<div className="flex items-center gap-1">
										<Calendar className="w-4 h-4" />
										{project.date}
									</div>
								</div>

								<p className="text-muted-foreground mb-6 leading-relaxed">
									{project.description}
								</p>

								{/* Stats */}
								<div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
									{Object.entries(project.stats).map(
										([key, value]) => (
											<div
												key={key}
												className="text-center"
											>
												<div className="text-lg font-bold text-primary">
													{value}
												</div>
												<div className="text-xs text-muted-foreground capitalize">
													{key}
												</div>
											</div>
										)
									)}
								</div>
							</div>
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
						variant="outline"
						className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
					>
						View All Projects
						<ArrowRight className="w-4 h-4 ml-2" />
					</Button>
				</motion.div>
			</div>
		</section>
	);
}
