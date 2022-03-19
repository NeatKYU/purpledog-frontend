import React from 'react';
import styled from 'styled-components';

interface ItemProps {
	id: number,
	onClick: () => void;
}

export const Item = (props: ItemProps) => {

	const { id, onClick } = props;

	return (
		<Container onClick={onClick}>
			{id}
		</Container>
	)
}

const Container = styled.div`
	width: 12.5rem;
	height: 3.125rem;
	background-color: #fff;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
	border-radius: 10px;
	text-align: center;
	line-height: 3.125rem;
	cursor: pointer;

	&:hover {
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		font-size: 20px;
	}
`