import React from 'react';
import './header.scss';
import TopMenuContainer from './top-menu/top-menu-container';

const Header = (): JSX.Element => {
  return (
    <div className="header">
      <TopMenuContainer />
    </div>
  );
};

export default Header;
