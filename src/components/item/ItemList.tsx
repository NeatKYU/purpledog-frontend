import React from 'react';
import styled from 'styled-components';

import { Item } from './Item';
import { Loading } from '../Loading';

interface ItemListProps {
	list: Array<number>,
	error: boolean,
	isLoading: boolean,
	setId: any,
}

export const ItemList = (props: ItemListProps) => {

	const { list, error, isLoading, setId } = props;

	return (
		<>
		{ isLoading && <LoadingWarpper className='flex-center'><Loading/></LoadingWarpper> }
		{ error && '리스트 데이터 로딩에 실패했습니다.'}
		<Container className='flex-center'>
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
	flex-direction: column;
	gap: 15px;

	@media (max-width: 720px) {
		width: 100px;
		height: 250px;
		flex-wrap: wrap;
	}

`

const LoadingWarpper = styled.div`
	width: 100%;
	height: 100%;
`