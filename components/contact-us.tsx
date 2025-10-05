'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const contactInfo = [
	{
		icon: Phone,
		title: 'Phone',
		details: '+1 (555) 123-4567',
		link: 'tel:+15551234567',
	},
	{
		icon: Mail,
		title: 'Email',
		details: 'contact@energytech.com',
		link: 'mailto:contact@energytech.com',
	},
	{
		icon: MapPin,
		title: 'Office',
		details: '123 Energy Street, Tech City, TC 12345',
		link: '#',
	},
	{
		icon: Clock,
		title: 'Business Hours',
		details: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM',
		link: '#',
	},
];

export default function Contact() {
	return (
		<section
			id="contact"
			className="relative py-24 bg-background overflow-hidden .section-padding"
		>
			{/* Decorative elements */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

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
						Get In Touch
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

				<div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="bg-card border border-border rounded-2xl p-8 shadow-lg"
					>
						<h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] mb-6">
							Send us a message
						</h3>
						<form className="space-y-6">
							<div className="grid md:grid-cols-2 gap-4">
								<div>
									<label
										htmlFor="firstName"
										className="block text-sm font-medium mb-2"
									>
										First Name
									</label>
									<Input
										id="firstName"
										placeholder="John"
										className="w-full"
									/>
								</div>
								<div>
									<label
										htmlFor="lastName"
										className="block text-sm font-medium mb-2"
									>
										Last Name
									</label>
									<Input
										id="lastName"
										placeholder="Doe"
										className="w-full"
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium mb-2"
								>
									Email
								</label>
								<Input
									id="email"
									type="email"
									placeholder="john@example.com"
									className="w-full"
								/>
							</div>

							<div>
								<label
									htmlFor="phone"
									className="block text-sm font-medium mb-2"
								>
									Phone Number
								</label>
								<Input
									id="phone"
									type="tel"
									placeholder="+237 657 613 211"
									className="w-full"
								/>
							</div>

							<div>
								<label
									htmlFor="service"
									className="block text-sm font-medium mb-2"
								>
									Service Interested In
								</label>
								<select
									id="service"
									className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
								>
									<option value="">Select a service</option>
									<option value="electrical">
										Electrical Installation
									</option>
									<option value="solar">
										Solar Energy Solutions
									</option>
									<option value="storage">
										Energy Storage Systems
									</option>
									<option value="smart">
										Smart Home Integration
									</option>
									<option value="maintenance">
										Maintenance & Support
									</option>
									<option value="consulting">
										Energy Consulting
									</option>
								</select>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium mb-2"
								>
									Message
								</label>
								<Textarea
									id="message"
									placeholder="Tell us about your project..."
									rows={5}
									className="w-full resize-none"
								/>
							</div>

							<Button
								type="submit"
								size="lg"
								className="w-full bg-primary hover:opacity-90 transition-opacity text-white"
							>
								Send Message
								<Send className="w-4 h-4 ml-2" />
							</Button>
						</form>
					</motion.div>

					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="space-y-8"
					>
						<div>
							<h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] mb-6">
								Contact Information
							</h3>
							<p className="text-muted-foreground mb-8 leading-relaxed">
								Have questions? We're here to help. Reach out
								through any of these channels and our team will
								get back to you promptly.
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
