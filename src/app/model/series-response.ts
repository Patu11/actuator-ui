export interface SeriesResponse {
	url: string;
	title: string;
	photoUrl: string;
	rating: number;
	description: string;
	seasons: Season[];
}

export interface Episode {
	title: string;
	premiereDate: string;
	rating: number;
	description: string;
}

export interface Season {
	number: number;
	episodes: Episode[];
}
