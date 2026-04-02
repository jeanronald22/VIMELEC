'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '237693455423';
const WHATSAPP_MESSAGE = encodeURIComponent(
	'Bonjour VIMELEC, je souhaite avoir plus d\'informations sur vos services.'
);

export default function WhatsAppButton() {
	const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

	return (
		<motion.a
			href={whatsappUrl}
			target="_blank"
			rel="noopener noreferrer"
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.4, delay: 1.5 }}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
			className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/50 transition-shadow duration-300 flex items-center justify-center"
			aria-label="Nous contacter sur WhatsApp"
		>
			<MessageCircle className="w-6 h-6" />
		</motion.a>
	);
}
