import React from 'react';
import { IStore } from '../../ts/interfaces';
import './header.scss';
import TopMenuContainer from './top-menu/top-menu-container';

const Header = (props: IStore): JSX.Element => {
  return (
    <div className="header">
      <TopMenuContainer store={props.store} />
    </div>
  );
};

export default Header;
