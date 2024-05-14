import {ComponentType, SVGAttributes} from 'react';
import dynamic from 'next/dynamic';

export const svgIcons: Record<string, ComponentType<SVGAttributes<SVGElement>>> = {
	'arrow-up': dynamic(() => import('../../icons/arrow-up.svg')),
	'arrow-down': dynamic(() => import('../../icons/arrow-down.svg')),
	'no-changes': dynamic(() => import('../../icons/no-changes.svg')),
};
