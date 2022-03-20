import { atom } from 'recoil';

export const listState = atom({
	key: 'list',
	default: [],
})

export const idState = atom({
	key: 'id',
	default: 0,
})

export const cartegoryState = atom({
	key: 'cartegory',
	default: 'topstories'
})