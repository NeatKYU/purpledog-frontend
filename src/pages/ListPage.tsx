import React from 'react';
import styled from 'styled-components';

// components
import { ItemList } from '../components/ItemList';

interface ListPageProps {

}

function ListPage(){

	return (
		<Container>
			<LeftSide>
				<ItemList/>
			</LeftSide>
			<RightSide>
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
`

const RightSide = styled.div`
	width: 50%;
	height: 100vh;
	padding: 20px;
	background-color: lightcoral;
`