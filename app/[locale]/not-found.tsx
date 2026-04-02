import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4">
			<div className="text-center max-w-lg">
				<h1 className="text-[8rem] md:text-[10rem] font-bold font-heading bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-2 leading-none">
					404
				</h1>
				<h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-foreground">
					Page introuvable
				</h2>
				<p className="text-muted-foreground mb-8 leading-relaxed">
					Oups ! La page que vous cherchez n&apos;existe pas ou a
					été déplacée.
				</p>
				<Link
					href="/"
					className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
				>
					&#8592; Retour à l&apos;accueil
				</Link>
			</div>
		</div>
	);
}
