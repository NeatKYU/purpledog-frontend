import React from 'react';
import styled from 'styled-components';

// components
import { ItemList } from '../components/item/ItemList';
import { ItemDetail } from '../components/item/ItemDetail';

interface ListPageProps {

}

function ListPage(){

	return (
		<Container>
			<LeftSide>
				<ItemList/>
			</LeftSide>
			<RightSide>
				<ItemDetail/>
			</RightSide>
		</Container>
	)
}

export default ListPage;

const Container = styled.div`
	width: 62.5rem;
	height: auto;
	margin: 0 auto;
	display: flex;
	flex-direction: row;
	background-color: #e4d8f9;
	border-radius: 10px;

	@media (max-width: 1000px) {
		width: 45rem;
	}
	@media (max-width: 720px) {
		width: 31.25rem;
		flex-direction: column-reverse;
	}
`

const LeftSide = styled.div`
	width: 50%;
	height: 90vh;
	padding: 20px;
	overflow-y: scroll;
	z-index: 10;
	margin-top: 10px;
	margin-bottom: 10px;

	@media (max-width: 720px) {
		width: 100%;
		height: 20rem;
	}
`

const RightSide = styled.div`
	width: 50%;
	height: 90vh;
	padding: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	
	@media (max-width: 720px) {
		width: 100%;
		height: auto;
	}
`