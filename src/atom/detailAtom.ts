import { atom } from 'recoil';
import { detailModel } from '../model/detail.model';

const detailInitialState:detailModel = {
	by: '',
	descendants: 0,
	id: 0,
	kids: [],
	score: 0,
	time: 0,
	title: '',
	type: '',
	url: '',
}

export const detailState = atom({
	key: 'detail',
	default: detailInitialState,
})