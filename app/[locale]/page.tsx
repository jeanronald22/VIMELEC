import AboutUs from '@/components/about-us';
import Contact from '@/components/contact-us';
import Footer from '@/components/footer';
import Hero from '@/components/hero-section';
import { NavBar } from '@/components/nav-bar';
import RecentWorks from '@/components/recents-work';
import Services from '@/components/services';

export default function Home() {
	return (
		<div className="min-h-screen">
			<NavBar />
			<Hero />
			<AboutUs />
			<Services />
			<RecentWorks />
			<Contact />
			<Footer />
		</div>
	);
}
