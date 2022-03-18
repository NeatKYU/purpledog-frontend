import { atom } from 'recoil';

export const topListState = atom({
	key: 'topList',
	default: [],
})

export const newListState = atom({
	key: 'newList',
	default: [],
})

export const askListState = atom({
	key: 'askList',
	default: [],
})

export const showListState = atom({
	key: 'showList',
	default: [],
})

export const jobListState = atom({
	key: 'jobList',
	default: [],
})