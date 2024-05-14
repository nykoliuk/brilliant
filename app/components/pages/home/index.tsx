'use client';

import React, {FC, MutableRefObject, useCallback, useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import {HeroSection} from '@/app/components/pages/home/hero-section';
import {ProjectsSection} from '@/app/components/pages/home/projects-section';
import {AiContributionSection} from '@/app/components/pages/home/ai-contribution-section';
import {gsap} from 'gsap';
import {Observer} from 'gsap/Observer';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {UseStateResult} from '@/app/utils/use-state-result';

gsap.registerPlugin(Observer, ScrollTrigger);

export const HomePage: FC = () => {
	const animationRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
	const heroSectionRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
	const heroHelperRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
	const projectsSectionRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
	const aiContributionSectionRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
	const [animating, setAnimating]: UseStateResult<boolean> = useState(false);
	const [currentIndex, setCurrentIndex]: UseStateResult<number> = useState(0);

	const gotoSection = useCallback(
		(newIndex: number) => {
			const sectionRefs: MutableRefObject<HTMLDivElement | null>[] = [
				heroSectionRef,
				heroHelperRef,
				aiContributionSectionRef,
				projectsSectionRef,
			];
			if (animating) return;
			setAnimating(true);

			const safeIndex: number = Math.max(0, Math.min(newIndex, sectionRefs.length - 1));
			const targetSection: HTMLDivElement | null = sectionRefs[safeIndex]?.current;

			if (targetSection) {
				targetSection.scrollIntoView({behavior: 'smooth'});
				setTimeout(() => {
					setAnimating(false);
					setCurrentIndex(safeIndex);
				}, 1000);
			}
		},
		[animating]
	);

	useEffect(() => {
		const observer: Observer = Observer.create({
			type: 'wheel, touch, pointer',
			wheelSpeed: -1,
			onDown: () => !animating && gotoSection(currentIndex - 1),
			onUp: () => !animating && gotoSection(currentIndex + 1),
			tolerance: 10,
			preventDefault: true,
		});

		// Cleanup function to destroy observer when component unmounts
		return () => observer.kill();
	}, [animating, currentIndex, gotoSection]);

	useEffect(() => {
		gotoSection(0);
	}, []);

	// Animation for earth
	useEffect(() => {
		gsap.to('.earth-animation', {
			scrollTrigger: {
				trigger: animationRef.current,
				start: 'top top',
				end: 'top -400%',
				scrub: 1.2,
			},
			y: '-97%',
			ease: 'none',
		});
	}, []);

	return (
		<>
			<div className="relative z-10" ref={animationRef}>
				<HeroSection gotoSection={gotoSection} heroHelperRef={heroHelperRef} ref={heroSectionRef} />
				<AiContributionSection ref={aiContributionSectionRef} />
				<ProjectsSection ref={projectsSectionRef} />

				{/*<LlmLeaderboard ref={llmLeaderboardRef} />*/}
			</div>

			<Image src="/earth.png" alt="Earth" width={950} height={980} className="fixed bottom-0 right-0 earth-animation" />
		</>
	);
};
