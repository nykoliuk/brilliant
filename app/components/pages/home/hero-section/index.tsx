'use client';

import React, {ForwardedRef, forwardRef, ForwardRefExoticComponent, MutableRefObject, RefAttributes, useEffect, useRef} from 'react';
import {clashGrotesk} from '@/app/fonts';
import {Header} from '@/app/components/header';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import styles from './hero-section.module.css';

gsap.registerPlugin(ScrollTrigger);
interface Data {
	value: string;
	title: string;
}
const data: Data[] = [
	{value: '1,873', title: 'LLM models'},
	{value: '$326,734', title: 'paid to data scientists'},
	{value: '6,557', title: 'members'},
];
export interface HeroSectionProps {
	gotoSection: (index: number) => void;
	heroHelperRef: MutableRefObject<HTMLDivElement | null>;
}
export const HeroSection: ForwardRefExoticComponent<HeroSectionProps & RefAttributes<HTMLDivElement>> = forwardRef(
	(props: HeroSectionProps, ref: ForwardedRef<HTMLDivElement>) => {
		const titleRef: MutableRefObject<HTMLHeadingElement | null> = useRef(null);

		useEffect(() => {
			const tl: gsap.core.Timeline = gsap.timeline({
				scrollTrigger: {
					trigger: '.helper-block',
					start: 'top bottom',
					end: 'top top',
					scrub: 1.2,
					onEnter: () => titleRef.current?.classList.add('animated'),
					onEnterBack: () => titleRef.current?.classList.remove('animated'),
				},
			});

			gsap.set('.hero-content', {y: 0});
			gsap.set('.animation-2 li', {y: 250, opacity: 0});

			// Animation for hero content
			tl.to('.hero-content', {
				y: '-100px',
				ease: 'none',
			})
				.to('.title-animation', {
					duration: 1,
					transformOrigin: 'left bottom',
					scale: 0.95,
				})
				.to(
					'.animation-2 li',
					{
						opacity: 1,
						y: 0,
						ease: 'none',
						stagger: 0.1,
					},
					'<'
				);
		}, []);

		return (
			<div className="min-h-2-screen" ref={ref}>
				<div className="min-h-screen flex flex-col justify-center sticky top-0">
					<Header />
					<div className="container relative">
						<div className={`hero-content ${styles.content}`}>
							<h1
								className={`title-animation mb-9 ${clashGrotesk.className} ${styles.title}`}
								ref={titleRef}
								data-text="A new economic primitive for funding decentralized AI"
							>
								A new economic primitive for funding decentralized AI
							</h1>
							<p className="fs-1 mb-9">
								We track, rank and pay for the best open source decentralized LLMs to compete against OpenAI
							</p>
							<div>
								<button className="btn btn-secondary btn-large" onClick={() => props.gotoSection(2)}>
									Buy Spice AI
								</button>
							</div>
						</div>

						<ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 absolute w-full top-full left-0 px-6 animation-2">
							{data.map((item: Data, index: number) => (
								<li
									key={index}
									className="rounded-full p-2 md:p-4 text-center relative overflow-hidden md-translate-y-[50px] lg:translate-y-[100px] opacity-0"
								>
									<div className="bg-gradient opacity-20 absolute inset-0" />
									<div className="relative z-10">
										<span className={`block h2 font-semibold ${clashGrotesk.className}`}>{item.value}</span>
										<span className="fs-1">{item.title}</span>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="min-h-screen helper-block" ref={props.heroHelperRef}></div>
			</div>
		);
	}
);
HeroSection.displayName = 'HeroSection';
