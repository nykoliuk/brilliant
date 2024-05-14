import {ForwardedRef, forwardRef, ForwardRefExoticComponent, RefAttributes} from 'react';
import {clashGrotesk} from '@/app/fonts';
import Icon from '@/app/components/icon';
import {LeaderboardTable} from '@/app/components/pages/home/leaderboard-section/types/leaderboard-table';
import {leaderboardTableMock} from '@/app/components/pages/home/leaderboard-section/leaderboard-table-mock';
import {rankToIcon} from '@/app/components/pages/home/leaderboard-section/types/rank-to-icon';

export const LlmLeaderboard: ForwardRefExoticComponent<RefAttributes<HTMLDivElement>> = forwardRef(
	(props, ref: ForwardedRef<HTMLDivElement>) => {
		return (
			<section className="min-h-screen flex flex-col justify-center py-20" ref={ref}>
				<div className="container">
					<div className="flex items-center justify-between">
						<h2 className={`font-medium ${clashGrotesk.className}`}>LLM Leaderboard</h2>
						<button className="btn btn-secondary btn-large ml-8">Submit your model</button>
					</div>
					<p className="fs-3 my-8">
						We evaluate LLMs on key benchmarks using the Eleuther AI, a framework to test LLMs on a large number of different
						evaluation tasks.
						<br />
						The higher the score, the better the LLM.
					</p>
					<div className="table-responsive">
						<table className="table-auto table-striped w-full">
							<thead>
								<tr>
									<th></th>
									<th>#</th>
									<th>Model Name</th>
									<th className="text-right">Average</th>
									<th className="text-right">ARC</th>
									<th className="text-right">HellaSwag</th>
									<th className="text-right">MMLU</th>
									<th className="text-right">TruthfulQA</th>
									<th className="text-right">Winogrande</th>
									<th className="text-right">GSM8K</th>
									<th className="text-right">Usage</th>
								</tr>
							</thead>
							<tbody>
								{leaderboardTableMock.map((row: LeaderboardTable) => (
									<tr key={row.id}>
										<td>
											<Icon
												name={rankToIcon[row.rank].iconName}
												className={`text-2xl ${rankToIcon[row.rank].color}`}
											/>
										</td>
										<td>{row.id}</td>
										<td>{row.modelName}</td>
										<td className="text-right">{row.average}</td>
										<td className="text-right">{row.arc}</td>
										<td className="text-right">{row.hellaSwag}</td>
										<td className="text-right">{row.mmlu}</td>
										<td className="text-right">{row.truthfulQA}</td>
										<td className="text-right">{row.winogrande}</td>
										<td className="text-right">{row.gsm8k}</td>
										<td className="text-right">{row.usage.toLocaleString('en-US')}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</section>
		);
	}
);
LlmLeaderboard.displayName = 'LlmLeaderboard';
