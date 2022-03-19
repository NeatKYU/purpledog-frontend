import styled from 'styled-components';
import Proptypes from 'prop-types';
import { useDetail } from '../hooks/useDetail';
import { useRecoilValue } from 'recoil';
import { idState } from '../atom/listAtom';
import { Loading } from './Loading';

interface ItemDetailProps {

}

export const ItemDetail = (props: ItemDetailProps) => {

	const currentId = useRecoilValue(idState);
	const { detail, error, isLoading } = useDetail(currentId);

	return (
		<Container key={currentId}>
			<div className='ab-center'>
				{ isLoading && currentId !== 0 && <Loading/> }
			</div>
			{ detail && detail.title }
		</Container>
	)
}

const Container = styled.div`
	width: 25rem;
	height: 31.25rem;
	display: flex;
	margin: 0 auto;
	padding: 40px;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
	background-color: #fff;
	position: relative;

	&:hover {
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}

	@keyframes leftIn {
		from { 
			transform: translate3d(-100%, 0, 0);
			height: 0;
			opacity: 0;
		}
		to { 
			transform: translateZ(0);
			opacity: 1;
		}
	}

	animation: leftIn 1s;

	.ab-center {
		width: 80px;
		height: 80px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`

// const TitleInfo = styled.div`
// 	width: 100%;

// `