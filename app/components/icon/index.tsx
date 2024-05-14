import {ComponentType, FC, SVGAttributes} from 'react';
import clsx from 'clsx';
import {svgIcons} from '@/app/components/icon/icons-map';

export interface IconProps extends SVGAttributes<SVGElement> {
	name: string;
}
export const Icon: FC<IconProps> = ({name, className, ...props}: IconProps) => {
	const Icon: ComponentType<SVGAttributes<SVGElement>> | null = svgIcons[name] || null;

	return Icon && <Icon {...props} className={clsx(className)} />;
};
export default Icon;
