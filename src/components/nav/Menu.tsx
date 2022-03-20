import styled from 'styled-components';

interface MenuProps {
	active: boolean,
	sw: string,
	title: string,
	onClick: () => void,
}

export const Menu = (props: MenuProps) => {
	
	const { sw, title, onClick, active } = props;

	return (
		<Container 
			className='flex-align-center'
			w={sw} 
			onClick={onClick}
		>
			<span className={`${active ? 'active' : ''}`}>{title}</span>
		</Container>
	)
}

const Container = styled.div<{w:string}>`
	width: ${(props) => props.w};
	height: 100%;
	cursor: pointer;
	font-size: 20px;
	color: #b6b6b6;

	.active {
		color: black;
		border-bottom: 2px solid black;
	}

	&:hover {
		font-size: 23px;
	}
`