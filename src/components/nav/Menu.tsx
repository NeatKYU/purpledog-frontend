import styled from 'styled-components';

interface MenuProps {
	sw: string,
	title: string,
	onClick: () => void,
}

export const Menu = (props: MenuProps) => {
	
	const { sw, title, onClick } = props;

	return (
		<Container className='flex-align-center' w={sw} onClick={onClick}>
			{title}
		</Container>
	)
}

const Container = styled.div<{w:string}>`
	width: ${(props) => props.w};
	height: 100%;
	cursor: pointer;
	font-size: 20px;


	&:hover {
		font-size: 23px;
	}
`