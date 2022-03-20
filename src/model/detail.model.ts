export interface detailModel {
	by: string,
	descendants: number,
	id: number,
	kids: ReadonlyArray<number>,
	score: number,
	time: number,
	title: string,
	type: string,
	url: string,
}