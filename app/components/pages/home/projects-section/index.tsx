import {ForwardedRef, forwardRef, ForwardRefExoticComponent, RefAttributes, useEffect} from 'react';
import {clashGrotesk} from '@/app/fonts';
import Image from 'next/image';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

interface Image {
	src: string;
	width: number;
	height: number;
}
const images: Image[] = [
	{src: '/logo-1.png', width: 334, height: 50},
	{src: '/logo-2.png', width: 421, height: 100},
	{src: '/logo-3.png', width: 328, height: 58},
	{src: '/logo-4.png', width: 102, height: 102},
	{src: '/logo-5.png', width: 102, height: 102},
];

gsap.registerPlugin(ScrollTrigger);

export const ProjectsSection: ForwardRefExoticComponent<RefAttributes<HTMLDivElement>> = forwardRef(
	(props, ref: ForwardedRef<HTMLDivElement>) => {
		useEffect(() => {
			if (!ref) return;
			gsap.set('.logo-animation', {
				x: '30%',
			});
			gsap.to('.logo-animation', {
				scrollTrigger: {
					trigger: '.projects-section',
					start: 'top 80%',
					end: 'top top',
					scrub: 1.2,
				},
				x: '0',
				ease: 'none',
			});
		}, [ref]);

		return (
			<div className="min-h-screen flex flex-col justify-center overflow-hidden scroll-section projects-section" ref={ref}>
				<div className="container">
					<h2 className={`text-center font-medium mb-12 ${clashGrotesk.className}`}>
						Projects integrated into the Arrakis AI Ecosystem
					</h2>
					<div className="relative logo-animation">
						<ul className="flex items-center justify-between gap-8">
							{images.map((image: Image, index: number) => (
								<li key={index}>
									<Image src={image} alt="Logo" width={image.width} height={image.height} />
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		);
	}
);
ProjectsSection.displayName = 'ProjectsSection';
