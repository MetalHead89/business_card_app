import React from 'react';
import TopMenu from './top-menu/top-menu';
import './header.scss';

interface IProps {
  menuItems: {
    id: number;
    anchor: string;
    linkText: string;
    active: boolean;
  }[];
}

const Header = (props: IProps): JSX.Element => {
  return (
    <div className="header">
      <TopMenu menuItems={props.menuItems} />
    </div>
  );
};

export default Header;
