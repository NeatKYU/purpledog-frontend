import React from 'react';
import styled from 'styled-components';

// components
import { ItemList } from '../components/ItemList';
import { ItemDetail } from '../components/ItemDetail';

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
`

const LeftSide = styled.div`
	width: 50%;
	height: 100vh;
	padding: 20px;
	background-color: lightcyan;
	overflow-y: scroll;
	z-index: 10;
`

const RightSide = styled.div`
	width: 50%;
	height: 100vh;
	padding: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: lightcoral;
`