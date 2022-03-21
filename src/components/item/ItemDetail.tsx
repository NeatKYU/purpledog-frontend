import styled from 'styled-components';
import { Loading } from '../Loading';
import { detailModel } from '../../model/detail.model';

interface ItemDetailProps {
	detail: detailModel,
	error: boolean,
	isLoading: boolean,
	currentId: number,
}

const Info = (title: string, info: any) => {
	
	return (
		<InfoContainer>
			{title}
			<div className='content'>
				{ info }
			</div>
		</InfoContainer>
	)
}

export const ItemDetail = (props: ItemDetailProps) => {

	const { detail, error, isLoading, currentId} = props;

	return (
		<Container key={currentId}>
			<div className='ab-center'>
				{ isLoading && currentId !== 0 && <Loading/> }
				{ error && '상세 내용 로딩에 실패하였습니다.'}
			</div>
			{detail && Info('제목', detail.title)}
			{detail && Info('점수', detail.score)}
			{detail && Info('url', <a href={ detail && detail.url}>{detail && detail.url}</a>)}
			{detail && Info('유형', detail.type)}
			{detail && Info('댓글 수', detail.descendants)}
			{detail && Info('작성자', detail.by)}
			{detail && Info('작성 시간', new Date(detail.time * 1000).toLocaleDateString('kr'))}
		</Container>
	)
}

const Container = styled.div`
	min-width: 20rem;
	width: 25rem;
	min-height: 31.25rem;
	height: auto;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	padding: 2.5rem;
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
	margin-bottom: 15px;
	color: #5c5c5c;

	.content {
		padding-left: 5px;
		font-size: 20px;
		margin-top: 3px;
		overflow-wrap: anywhere;
		color: black;
	}
`