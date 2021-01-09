import React from 'react';
import './topMenu.scss';
import { BrowserRouter, NavLink } from 'react-router-dom';

interface IMenuItem {
  [key: string]: string;
}

interface IProps {
  [key: string]: IMenuItem[];
}

interface IState {
  [key: string]: string;
}

class TopMenu extends React.Component<IProps, IState> {
  menuItems = this.props.menuItems.map((item, i) => {
    return (
      <li key={i} className="topMenu__menu-item">
        <NavLink to={item.path}>{item.linkText}</NavLink>
      </li>
    );
  });

  render() {
    return (
      <nav className="topMenu">
        <BrowserRouter>
          <ul className="topMenu__menu">{this.menuItems}</ul>
        </BrowserRouter>
      </nav>
    );
  }
}

export default TopMenu;
