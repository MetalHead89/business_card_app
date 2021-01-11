import React from 'react';
import './topMenu.scss';

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
        <a onClick={() => window.location.hash=`#${item.anchor}`}>
          {item.linkText}
        </a>
      </li>
    );
  });

  render() {
    return (
      <nav className="topMenu">
          <ul className="topMenu__menu">{this.menuItems}</ul>
      </nav>
    );
  }
}

export default TopMenu;
