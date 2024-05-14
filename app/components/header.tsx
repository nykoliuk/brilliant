import {FC} from 'react';

export const Header: FC = () => {
	return (
		<header className="mt-8 px-4 absolute top-0 left-0 w-full z-10">
			<nav>
				<ul className="flex justify-center gap-6">
					<li>
						<a href="#" className="btn">
							LLM Leaderboard
						</a>
					</li>
					<li>
						<a href="#" className="btn btn-secondary">
							Buy Spice AI
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};
