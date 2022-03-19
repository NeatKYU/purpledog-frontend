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
			<InfoContainer>
				title
				<div className='content'>
					{ detail && detail.title }
				</div>
			</InfoContainer>
			<InfoContainer>
				score
				<div className='content'>
					{ detail && detail.score}
				</div>
			</InfoContainer>
			<InfoContainer>
				url
				<div className='content'>
					<a href={ detail && detail.url}>{detail && detail.url}</a>
				</div>
			</InfoContainer>
			<InfoContainer>
				type
				<div className='content'>
					{ detail && detail.type}
				</div>
			</InfoContainer>
			{
				detail?.kids && 
				<InfoContainer>
					kids
					<div className='content'>
						{ detail && detail.kids?.map((item,index) => (
							<span key={index}>{item}, </span> 
						))}
					</div>
				</InfoContainer>
			}
			<InfoContainer>
				by
				<div className='content'>
					{ detail && detail.by}
				</div>
			</InfoContainer>
		</Container>
	)
}

const Container = styled.div`
	width: 25rem;
	min-height: 31.25rem;
	height: auto;
	display: flex;
	flex-direction: column;
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

const InfoContainer = styled.div`
	width: 100%;
	height: auto;
	font-size: 13px;
	margin-bottom: 10px;
	color: #5c5c5c;

	.content {
		padding-left: 5px;
		font-size: 20px;
		margin-top: 3px;
		overflow-wrap: anywhere;
		color: black;
	}
`