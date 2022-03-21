import styled from 'styled-components';
import Close from '../../assets/close.png';

interface closeButtonProps {
	onClick: () => void
}


export const CloseButton = (props: closeButtonProps) => {

	const { onClick } = props;

	return (
		<Container className='flex-center' onClick={onClick}>
			<img src={Close} alt='close' width={'20rem'} height={'20rem'}/>
		</Container>
	)
}

const Container = styled.button`
	width: 2rem;
	height: 2rem;
	cursor: pointer;
`