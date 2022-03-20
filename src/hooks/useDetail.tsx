import useSWR from 'swr';
import { useRecoilState } from 'recoil';
import { detailState } from '../atom/detailAtom';
import { fetcher } from '../util/fetcher';
import { useEffect } from 'react';

export const useDetail = (id: number) => {

	const [detail, setDetail] = useRecoilState(detailState);
	const { data, error } = useSWR(
		id !== 0 && `${process.env.REACT_APP_BASE_URL}/v0/item/${id}.json?print=pretty`, 
		fetcher,
		{ refreshInterval: 3600 * 1000 }
	);

	useEffect(() => {
		setDetail(data)
	}, [data])

	return {
		detail: detail,
		detailError: error,
		detailIsLoading: !error && !data,
	}
}