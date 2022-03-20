import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import useSWR from 'swr';
import { listState } from '../atom/listAtom';
import { fetcherSort } from '../util/fetcher';

export const useList = (cartegory: string) => {

	const [list, setList] = useRecoilState(listState);
	const { data, error } = useSWR(
		`${process.env.REACT_APP_BASE_URL}/v0/${cartegory}.json?print=pretty`, 
		fetcherSort,
		{ refreshInterval: 3600 * 1000 }
	);

	useEffect(() => {
		setList(data)
	}, [data])

	return {
		list: list,
		error: error,
		isLoading: !error && !data,
	}
}