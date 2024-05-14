import {LeaderboardRank} from '@/app/components/pages/home/leaderboard-section/types/leaderboard-rank';

interface IconInfo {
	iconName: string;
	color: string;
}

export const rankToIcon: Record<LeaderboardRank, IconInfo> = {
	[LeaderboardRank.NoChange]: {
		iconName: 'no-changes',
		color: 'text-secondary',
	},
	[LeaderboardRank.Up]: {
		iconName: 'arrow-up',
		color: 'text-success',
	},
	[LeaderboardRank.Down]: {
		iconName: 'arrow-down',
		color: 'text-error',
	},
};
