import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import { cartegoryState } from '../../atom/listAtom';
import { Menu } from './Menu';

interface NavibarProps{
	menuList: Array<string>,
	isLogo: boolean,
	logoImage?: any,
}

export const Navibar = (props: NavibarProps) => {

	const { menuList, isLogo, logoImage } = props;

	const [cartegory, setCartergory] = useRecoilState(cartegoryState);

	return (
		<Container className='flex-align-center'>
			{ isLogo && 
				<div className='logo'>
					<img src={logoImage} alt={'logo'}/>
				</div>
			}
			{ menuList && menuList.map((item) => (
					<Menu
						active={item+'stories' === cartegory}
						title={item} 
						sw={'3.75rem'} 
						onClick={() => setCartergory(item+'stories')}
					/>
				))
			}
		</Container>
	)
}

const Container = styled.div`
	width: 62.5rem;
	height: 3.75rem;
	margin: 0 auto;
	gap: 10px;
	margin-top: 5px;
	margin-bottom: 5px;
	box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
	border-radius: 10px;

	.logo {
		width: 3.75rem;
		height: 3.75rem;
		display: flex;
		align-items: stretch;
		margin-right: 15px;
	}

	@media (max-width: 1000px) {
		width: 100%;
	}
	@media (max-width: 376px) {
		width: 23.4375rem;
	}
`