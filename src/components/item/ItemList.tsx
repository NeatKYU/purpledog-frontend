import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState, useRecoilValue } from 'recoil';

import { Item } from './Item';
import { idState, cartegoryState } from '../../atom/listAtom';
import { useList } from '../../hooks/useList';
import { Loading } from '../Loading';

interface ItemListProps {

}

export const ItemList = (props: ItemListProps) => {

	const setId = useSetRecoilState(idState);
	const menu = useRecoilValue(cartegoryState);
	const { list, error, isLoading } = useList(menu);

	return (
		<>
		{ isLoading && <LoadingWarpper><Loading/></LoadingWarpper> }
		{ error && '리스트 데이터 로딩에 실패했습니다.'}
		<Container>
			{list && 
				list.map((item:number, index) => (
					<Item key={index} id={item} onClick={() => setId(item)}/>
				))
			}
		</Container>
		</>
	)
}


const Container = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 15px;

`

const LoadingWarpper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`