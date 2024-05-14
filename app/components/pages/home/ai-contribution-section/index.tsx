'use client';

import React, {ForwardedRef, forwardRef, ForwardRefExoticComponent, RefAttributes, useEffect} from 'react';
import {clashGrotesk} from '@/app/fonts';
import Image from 'next/image';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import styles from './ai-contribution-section.module.css';

gsap.registerPlugin(ScrollTrigger);

export const AiContributionSection: ForwardRefExoticComponent<RefAttributes<HTMLDivElement>> = forwardRef(
	(props, ref: ForwardedRef<HTMLDivElement>) => {
		useEffect(() => {
			if (!ref) return;
			gsap.set('.meteorite-animation', {
				y: 0,
				x: -100,
				scale: 0.2,
			});
			gsap.to('.meteorite-animation', {
				scrollTrigger: {
					trigger: '.contribution-section',
					start: 'top bottom',
					end: 'bottom top',
					scrub: 1.2,
				},
				y: '100px',
				x: '100px',
				scale: 1.3,
				ease: 'none',
			});
		}, [ref]);

		return (
			<div className="min-h-screen flex flex-col justify-center relative contribution-section" id="contribution" ref={ref}>
				<div className="container relative z-10">
					<div className={styles.content}>
						<h2 className={`mb-8 font-medium ${clashGrotesk.className}`}>
							Crowdsourcing our collective intelligence to build the best AI
						</h2>
						<p className="fs-3 mb-4">
							Open source AI has been lagging behind the likes of Google and OpenAI by billions of dollars.
						</p>
						<p className="fs-3 mb-8">
							Salt aims to solve that by rewarding open source developers who contribute to the democratization of AI. We run
							competitions between AI models to find and reward the best AI models. As a result, our users will be able to
							access the latest cutting edge AI models.
						</p>
						<button className="btn btn-secondary btn-large">Use The Cutting Edge AI</button>
					</div>
				</div>
				<Image
					src="/meteorite.png"
					alt="Meteorite"
					width={293}
					height={229}
					className="absolute top-0 left-0 meteorite-animation"
				/>
			</div>
		);
	}
);
AiContributionSection.displayName = 'AiContributionSection';
