import React from 'react';
import { IHeader } from '../../ts/interfaces';
import TopMenu from './top-menu/top-menu';
import './header.scss';

const Header = (props: IHeader): JSX.Element => {
  return (
    <div className="header">
      <TopMenu
        menuItems={props.topMenu.menuItems}
        dispatch={props.topMenu.dispatch}
      />
    </div>
  );
};

export default Header;
