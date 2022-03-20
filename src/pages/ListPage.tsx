import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { useList } from '../hooks/useList';
import { useDetail } from '../hooks/useDetail';

// components
import { idState, cartegoryState } from '../atom/listAtom';
import { ItemList } from '../components/item/ItemList';
import { ItemDetail } from '../components/item/ItemDetail';

interface ListPageProps {

}

function ListPage(){

	const setId = useSetRecoilState(idState);
	const menu = useRecoilValue(cartegoryState);
	const currentId = useRecoilValue(idState);
	const { detail, detailError, detailIsLoading } = useDetail(currentId);
	const { list, listError, listIsLoading } = useList(menu);

	return (
		<Container>
			<LeftSide>
				<ItemList 
					list={list} 
					error={listError} 
					isLoading={listIsLoading} 
					setId={setId}
				/>
			</LeftSide>
			<RightSide>
				<ItemDetail 
					detail={detail}
					error={detailError}
					isLoading={detailIsLoading}
					currentId={currentId}
				/>
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
		flex-direction: column;
	}
	@media (max-width: 480px) {
		width: 23.4375rem;
		flex-direction: column;
	}
`

const LeftSide = styled.div`
	width: 50%;
	height: 90vh;
	padding: 1.5rem;
	overflow-y: scroll;
	z-index: 10;
	margin-top: 10px;
	margin-bottom: 10px;

	@media (max-width: 720px) {
		width: 100%;
		height: 20rem;
		overflow-x: scroll;
		overflow-y: hidden;
	}
`

const RightSide = styled.div`
	width: 50%;
	height: 90vh;
	padding: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	
	@media (max-width: 720px) {
		width: 100%;
		height: auto;
	}
`