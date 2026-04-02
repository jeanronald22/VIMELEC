import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'VIMELEC — Ingénierie, Énergie & Innovation Digitale';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;

	const title =
		locale === 'fr'
			? 'Ingénierie, Énergie & Innovation'
			: 'Engineering, Energy & Innovation';

	const subtitle =
		locale === 'fr'
			? 'Votre partenaire en solutions technologiques au Cameroun'
			: 'Your technology solutions partner in Cameroon';

	return new ImageResponse(
		(
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					background: 'linear-gradient(135deg, #0C1B2A 0%, #1a3a5c 50%, #2563EB 100%)',
					fontFamily: 'sans-serif',
				}}
			>
				{/* Logo area */}
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						marginBottom: 32,
						padding: '12px 32px',
						backgroundColor: 'rgba(255,255,255,0.1)',
						border: '1px solid rgba(255,255,255,0.2)',
						borderRadius: 16,
					}}
				>
					<span
						style={{
							fontSize: 48,
							fontWeight: 800,
							color: '#ffffff',
							letterSpacing: 6,
						}}
					>
						VIMELEC
					</span>
				</div>

				{/* Title */}
				<h1
					style={{
						fontSize: 52,
						fontWeight: 700,
						color: '#ffffff',
						textAlign: 'center',
						margin: '0 0 12px 0',
						lineHeight: 1.2,
					}}
				>
					{title}
				</h1>

				{/* Subtitle */}
				<p
					style={{
						fontSize: 24,
						color: 'rgba(255,255,255,0.7)',
						textAlign: 'center',
						margin: 0,
						maxWidth: 600,
					}}
				>
					{subtitle}
				</p>

				{/* Bottom accent */}
				<div
					style={{
						position: 'absolute',
						bottom: 0,
						left: 0,
						right: 0,
						height: 6,
						background: 'linear-gradient(90deg, #2563EB, #3b82f6, #60a5fa)',
					}}
				/>
			</div>
		),
		{ ...size }
	);
}
