'use client';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const FAQ_KEYS = ['q1', 'q2', 'q3', 'q4', 'q5'] as const;

export default function FAQ() {
	const t = useTranslations('FAQ');

	return (
		<section
			id="faq"
			className="relative py-24 bg-muted/30 overflow-hidden section-padding"
		>
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

			<div className="max-w-4xl mx-auto w-full relative z-10">
				{/* Header */}
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<motion.span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
						{t('sectionBadge')}
					</motion.span>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-balance">
						{t('sectionTitle')}
					</h2>
					<p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto text-pretty">
						{t('sectionSubtitle')}
					</p>
				</motion.div>

				{/* Accordion */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<Accordion
						type="single"
						collapsible
						className="space-y-4"
					>
						{FAQ_KEYS.map((key, index) => (
							<motion.div
								key={key}
								initial={{ opacity: 0, y: 15 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.4,
									delay: index * 0.08,
								}}
							>
								<AccordionItem
									value={key}
									className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/10 transition-shadow duration-300"
								>
									<AccordionTrigger className="text-left text-base font-semibold hover:text-primary transition-colors py-5 [&[data-state=open]]:text-primary">
										{t(`items.${key}.question`)}
									</AccordionTrigger>
									<AccordionContent className="text-muted-foreground leading-relaxed pb-5">
										{t(`items.${key}.answer`)}
									</AccordionContent>
								</AccordionItem>
							</motion.div>
						))}
					</Accordion>
				</motion.div>
			</div>
		</section>
	);
}
