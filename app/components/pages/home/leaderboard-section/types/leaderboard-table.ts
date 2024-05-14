import {LeaderboardRank} from '@/app/components/pages/home/leaderboard-section/types/leaderboard-rank';

export interface LeaderboardTable {
	rank: LeaderboardRank;
	id: number;
	modelName: string;
	average: number;
	arc: number;
	hellaSwag: number;
	mmlu: number;
	truthfulQA: number;
	winogrande: number;
	gsm8k: number;
	usage: number;
}
