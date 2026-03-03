import ContactType from '@/types/contact-type';
import { LocateIcon, Mail, Phone } from 'lucide-react';

export const contacts: ContactType[] = [
	{
		name: '+237 693 455 423',
		icon: Phone,
	},
	{
		name: 'vimelec.tech@gmail.com',
		icon: Mail,
	},
	{
		name: 'Douala, Cameroun',
		icon: LocateIcon,
	},
];
