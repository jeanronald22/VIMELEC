import Hero from '@/components/hero-section';
import { NavBar } from '@/components/nav-bar';
import dynamic from 'next/dynamic';

const AboutUs = dynamic(() => import('@/components/about-us'));
const Services = dynamic(() => import('@/components/services'));
const RecentWorks = dynamic(() => import('@/components/recents-work'));
const Contact = dynamic(() => import('@/components/contact-us'));
const Footer = dynamic(() => import('@/components/footer'));

export default function Home() {
	return (
		<div className="min-h-screen">
			<NavBar />
			<main>
				<Hero />
				<AboutUs />
				<Services />
				<RecentWorks />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
