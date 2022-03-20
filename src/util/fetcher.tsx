import axios from 'axios'

export const fetcher = (url: string) => {
	return axios.get(url)
	.then(res => res.data)
}

export const fetcherSort = (url: string) => {
	return axios.get(url)
	.then(res => res.data.sort((a: any, b: any) => b - a))
}