import { contacts } from '@/data/contacts';
import Image from 'next/image';
import Link from 'next/link';

export default function InformationHeader() {
	const socalsMedia = [
		{ link: '', icon: '/social-media/facebook.png' },
		{ link: '', icon: '/social-media/twitter.png' },
		{ link: '', icon: '/social-media/linkedin.png' },
		{ link: '', icon: '/social-media/youtube.png' },
	];

	return (
		<div className="max-w-7xl mx-auto py-3  flex flex-col sm:flex-row items-center sm:justify-between gap-3">
			<div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm ">
				{contacts.map((contact) => (
					<div key={contact.name} className="flex items-center">
						{contact.icon && (
							<contact.icon className="inline-block mr-2 w-5 h-5" />
						)}
						<span>{contact.name}</span>
					</div>
				))}
			</div>

			{/* Socials */}
			<div className="flex items-center justify-center sm:justify-end gap-3 text-sm">
				<p className="hidden sm:block">Follow us</p>
				<div className="flex gap-3">
					{socalsMedia.map((social) => (
						<Link href={social.link} key={social.icon}>
							<Image
								src={social.icon}
								alt={social.link || 'social-media'}
								width={20}
								height={20}
								priority
								className="w-5 h-5 object-contain cursor-pointer hover:opacity-80 transition"
							/>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
