'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useTranslations } from 'next-intl';
import sendEmail from '@/services/sendEmail';
import { FormEvent, useState } from 'react';

export default function Contact() {
	const t = useTranslations('Contact');
	const [loading, setLoading] = useState(false);
	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		try {
			setLoading(true);
			e.preventDefault();
			await sendEmail(e.currentTarget);
			setLoading(false);
			window.alert('message envoyer avec success');
		} catch (e) {
			console.log(e);
		} finally {
			setLoading(false);
		}
	};

	const contactInfo = [
		{
			icon: Phone,
			title: t('phone.title'),
			details: t('phone.details'),
			link: t('phone.link'),
		},
		{
			icon: Mail,
			title: t('email.title'),
			details: t('email.details'),
			link: t('email.link'),
		},
		{
			icon: MapPin,
			title: t('office.title'),
			details: t('office.details'),
			link: t('office.link'),
		},
		{
			icon: Clock,
			title: t('hours.title'),
			details: t('hours.details'),
			link: t('hours.link'),
		},
	];

	return (
		<section
			id="contact"
			className="relative py-24 bg-background overflow-hidden .section-padding"
		>
			<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

			<div className="container mx-auto px-4 relative z-10">
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
						{t('sectionTitleHighlight')}
					</h2>
					<p className="text-lg text-muted-foreground font-[family-name:var(--font-source-sans)] max-w-2xl mx-auto text-pretty">
						{t('sectionSubtitle')}
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
					{/* Contact Form */}
					<motion.div
						className="bg-card border border-border rounded-2xl p-8 shadow-lg"
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] mb-6">
							{t('formTitle')}
						</h3>
						<form
							className="space-y-6"
							onSubmit={(e) => onSubmit(e)}
						>
							<div className="grid md:grid-cols-2 gap-4">
								<div>
									<label
										htmlFor="firstName"
										className="block text-sm font-medium mb-2"
									>
										{t('firstNameLabel')}
									</label>
									<Input
										id="firstName"
										placeholder={t('firstNamePlaceholder')}
										className="w-full"
										name="firstName"
									/>
								</div>
								<div>
									<label
										htmlFor="lastName"
										className="block text-sm font-medium mb-2"
									>
										{t('lastNameLabel')}
									</label>
									<Input
										id="lastName"
										placeholder={t('lastNamePlaceholder')}
										className="w-full"
										name="lastName"
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium mb-2"
								>
									{t('emailLabel')}
								</label>
								<Input
									id="email"
									type="email"
									placeholder={t('emailPlaceholder')}
									className="w-full"
									name="email"
								/>
							</div>

							<div>
								<label
									htmlFor="phone"
									className="block text-sm font-medium mb-2"
								>
									{t('phoneLabel')}
								</label>
								<Input
									id="phone"
									type="tel"
									placeholder={t('phonePlaceholder')}
									className="w-full"
									name="phone"
								/>
							</div>

							<div>
								<label
									htmlFor="service"
									className="block text-sm font-medium mb-2"
								>
									{t('serviceLabel')}
								</label>
								<select
									id="service"
									className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
									name="service"
								>
									<option value="">
										{t('servicePlaceholder')}
									</option>
									<option value="electrical">
										{t('services.electrical')}
									</option>
									<option value="solar">
										{t('services.solar')}
									</option>
									<option value="storage">
										{t('services.storage')}
									</option>
									<option value="smart">
										{t('services.smart')}
									</option>
									<option value="maintenance">
										{t('services.maintenance')}
									</option>
									<option value="consulting">
										{t('services.consulting')}
									</option>
								</select>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium mb-2"
								>
									{t('messageLabel')}
								</label>
								<Textarea
									id="message"
									placeholder={t('messagePlaceholder')}
									rows={5}
									className="w-full resize-none"
									name="message"
								/>
							</div>

							<Button
								type="submit"
								size="lg"
								className="w-full bg-primary hover:opacity-90 transition-opacity text-white"
							>
								{loading && (
									<Loader2 className="animate-spin" />
								)}
								{t('sendButton')}{' '}
								<Send className="w-4 h-4 ml-2" />
							</Button>
						</form>
					</motion.div>

					{/* Contact Information */}
					<motion.div
						className="space-y-8"
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<div>
							<h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] mb-6">
								{t('infoTitle')}
							</h3>
							<p className="text-muted-foreground mb-8 leading-relaxed">
								{t('infoSubtitle')}
							</p>
						</div>

						<div className="space-y-4">
							{contactInfo.map((info, index) => (
								<motion.a
									key={info.title}
									href={info.link}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.5,
										delay: index * 0.1,
									}}
									whileHover={{ x: 8 }}
									className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-all group"
								>
									<div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
										<info.icon className="w-6 h-6 text-white" />
									</div>
									<div>
										<h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
											{info.title}
										</h4>
										<p className="text-sm text-muted-foreground">
											{info.details}
										</p>
									</div>
								</motion.a>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
