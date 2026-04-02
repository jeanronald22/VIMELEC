import Hero from '@/components/hero-section';
import { NavBar } from '@/components/nav-bar';
import dynamic from 'next/dynamic';

const AboutUs = dynamic(() => import('@/components/about-us'));
const Services = dynamic(() => import('@/components/services'));
const RecentWorks = dynamic(() => import('@/components/recents-work'));
const FAQ = dynamic(() => import('@/components/faq'));
const Contact = dynamic(() => import('@/components/contact-us'));
const Footer = dynamic(() => import('@/components/footer'));
const ScrollToTop = dynamic(() => import('@/components/scroll-to-top'));
const WhatsAppButton = dynamic(() => import('@/components/whatsapp-button'));

export default function Home() {
	return (
		<div className="min-h-screen">
			<NavBar />
			<main>
				<Hero />
				<AboutUs />
				<Services />
				<RecentWorks />
				<FAQ />
				<Contact />
			</main>
			<Footer />
			<ScrollToTop />
			<WhatsAppButton />
		</div>
	);
}
