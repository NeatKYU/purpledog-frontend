import React, { useState } from 'react';
import styled from 'styled-components';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { useList } from '../hooks/useList';
import { useDetail } from '../hooks/useDetail';

// components
import { idState, cartegoryState } from '../atom/listAtom';
import { ItemList } from '../components/item/ItemList';
import { ItemDetail } from '../components/item/ItemDetail';
import { detailState } from '../atom/detailAtom';

interface ListPageProps {

}

function ListPage(){

	const [isOpen, setIsOpen] = useState(false);
	const setId = useSetRecoilState(idState);
	const menu = useRecoilValue(cartegoryState);
	const currentId = useRecoilValue(idState);
	const { detail, detailError, detailIsLoading } = useDetail(currentId);
	const { list, listError, listIsLoading } = useList(menu);

	const handleCloseDetail = () => {
		setIsOpen(false)
	}

	const handleOpenDetail = (item:number) => {
		setId(item);
		setIsOpen(true)
	}

	return (
		<Container>
			<LeftSide>
				<ItemList 
					list={list} 
					error={listError} 
					isLoading={listIsLoading} 
					setId={handleOpenDetail}
				/>
			</LeftSide>
			{
				isOpen
				&&
				<RightSide>
					<ItemDetail 
						detail={detail}
						error={detailError}
						isLoading={detailIsLoading}
						currentId={currentId}
						isButton
						handleButton={handleCloseDetail}
					/>
				</RightSide>
			}
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
	position: relative;

	@media (max-width: 1000px) {
		width: 45rem;
	}
	@media (max-width: 720px) {
		width: 31.25rem;
		flex-direction: column;
	}
	@media (max-width: 480px) {
		width: 23.4375rem;
	}
`

const LeftSide = styled.div`
	width: 50%;
	height: 90vh;
	padding: 1.5rem;
	overflow-y: scroll;
	margin-top: 10px;
	margin-bottom: 10px;

	@media (max-width: 720px) {
		width: 100%;
	}
	@media (max-width: 376px) {
		width: 23.4375rem;
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
		position: absolute;
		top: 0;
		left: 0;
		z-index: 11;
	}
	@media (max-width: 376px) {
		width: 23.4375rem;
	}
`