'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function RecentWorks() {
	const t = useTranslations('RecentWorks');

	// Création d'un tableau statique à partir du JSON de traduction
	const projects = [
		{
			title: t('projects.solarFarm.title'),
			image: '/projects/projet1.jpg',
			category: t('projects.solarFarm.category'),
			location: t('projects.solarFarm.location'),
			description: t('projects.solarFarm.description'),
			stat1: t('projects.solarFarm.stat1'),
			stat2: t('projects.solarFarm.stat2'),
			stat3: t('projects.solarFarm.stat3'),
		},
		{
			title: t('projects.smartOffice.title'),
			image: '/projects/projet2.jpg',
			category: t('projects.smartOffice.category'),
			location: t('projects.smartOffice.location'),
			description: t('projects.smartOffice.description'),
			stat1: t('projects.smartOffice.stat1'),
			stat2: t('projects.smartOffice.stat2'),
			stat3: t('projects.smartOffice.stat3'),
		},
		{
			title: t('projects.residentialSolar.title'),
			image: '/projects/projet3.jpg',
			category: t('projects.residentialSolar.category'),
			location: t('projects.residentialSolar.location'),
			description: t('projects.residentialSolar.description'),
			stat1: t('projects.residentialSolar.stat1'),
			stat2: t('projects.residentialSolar.stat2'),
			stat3: t('projects.residentialSolar.stat3'),
		},
		{
			title: t('projects.industrialUpgrade.title'),
			image: '/projects/projet4.jpg',
			category: t('projects.industrialUpgrade.category'),
			location: t('projects.industrialUpgrade.location'),
			description: t('projects.industrialUpgrade.description'),
			stat1: t('projects.industrialUpgrade.stat1'),
			stat2: t('projects.industrialUpgrade.stat2'),
			stat3: t('projects.industrialUpgrade.stat3'),
		},
		{
			title: t('projects.evCharging.title'),
			image: '/projects/projet5.jpg',
			category: t('projects.evCharging.category'),
			location: t('projects.evCharging.location'),
			description: t('projects.evCharging.description'),
			stat1: t('projects.evCharging.stat1'),
			stat2: t('projects.evCharging.stat2'),
			stat3: t('projects.evCharging.stat3'),
		},
		{
			title: t('projects.greenCampus.title'),
			image: '/projects/projet6.jpg',
			category: t('projects.greenCampus.category'),
			location: t('projects.greenCampus.location'),
			description: t('projects.greenCampus.description'),
			stat1: t('projects.greenCampus.stat1'),
			stat2: t('projects.greenCampus.stat2'),
			stat3: t('projects.greenCampus.stat3'),
		},
	];

	return (
		<section
			id="works"
			className="relative py-24 bg-muted/30 overflow-hidden .section-padding"
		>
			<div className="container mx-auto px-4">
				{/* Header */}
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<motion.span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
						{t('sectionTitle')}
					</motion.span>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-playfair)] mb-6 text-balance">
						{t('sectionTitle')}
					</h2>
					<p className="text-lg text-muted-foreground font-[family-name:var(--font-source-sans)] max-w-2xl mx-auto text-pretty">
						{t('sectionSubtitle')}
					</p>
				</motion.div>

				{/* Grid des projets */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
							className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							{/* Image */}
							<div className="relative h-64 overflow-hidden">
								<Image
									src={project.image}
									alt={project.title}
									className="object-cover group-hover:scale-110 transition-transform duration-500"
									fill
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
								</div>
								<p className="text-muted-foreground mb-6 leading-relaxed">
									{project.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
