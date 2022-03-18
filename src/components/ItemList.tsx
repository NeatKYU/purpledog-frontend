import React from 'react';
import styled from 'styled-components';
import { Item } from './Item';

interface ItemListProps {

}

export const ItemList = (props: ItemListProps) => {

	return (
		<Container>
			<Item id={123124}/>
			<Item id={123124}/>
			<Item id={123124}/>
			<Item id={123124}/>
			<Item id={123124}/>
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