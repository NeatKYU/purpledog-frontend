import React from 'react';
import GlobalStyle from './GlobalStyle';
import ListPage from './pages/ListPage';
import { Navibar } from './components/nav/Navibar';
import Purpledog from './assets/purpledog.png';
import { menuList } from './data/menuList';

function App() {

  return (
    <div>
      <GlobalStyle/>
      <Navibar isLogo logoImage={Purpledog} menuList={menuList}/>
      <ListPage/>
    </div>
  );
}

export default App;
