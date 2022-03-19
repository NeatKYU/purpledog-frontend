import React from 'react';
import styled from 'styled-components';
import { Item } from './Item';
import { useSetRecoilState } from 'recoil';
import { idState } from '../atom/listAtom';
import { useList } from '../hooks/useList';

interface ItemListProps {

}

export const ItemList = (props: ItemListProps) => {

	const setId = useSetRecoilState(idState);
	const { list, error, isLoading } = useList('topstories');

	return (
		<Container>
			{list && 
				list.map((item:number) => (
					<Item id={item} onClick={() => setId(item)}/>
				))
			}
		</Container>
	)
}


const Container = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 15px;

`