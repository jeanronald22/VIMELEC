'use client';

import { useEffect, useRef, useState } from 'react';

interface UseCountUpOptions {
	end: number;
	duration?: number;
	suffix?: string;
	prefix?: string;
}

export function useCountUp({ end, duration = 2000, suffix = '', prefix = '' }: UseCountUpOptions) {
	const [count, setCount] = useState(0);
	const [hasStarted, setHasStarted] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !hasStarted) {
					setHasStarted(true);
				}
			},
			{ threshold: 0.3 }
		);

		const currentRef = ref.current;
		if (currentRef) observer.observe(currentRef);

		return () => {
			if (currentRef) observer.unobserve(currentRef);
		};
	}, [hasStarted]);

	useEffect(() => {
		if (!hasStarted) return;

		let startTime: number | null = null;
		let animationFrame: number;

		const animate = (timestamp: number) => {
			if (!startTime) startTime = timestamp;
			const progress = Math.min((timestamp - startTime) / duration, 1);

			// Ease-out cubic
			const eased = 1 - Math.pow(1 - progress, 3);
			setCount(Math.floor(eased * end));

			if (progress < 1) {
				animationFrame = requestAnimationFrame(animate);
			}
		};

		animationFrame = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(animationFrame);
	}, [hasStarted, end, duration]);

	const display = `${prefix}${count}${suffix}`;

	return { ref, display };
}
