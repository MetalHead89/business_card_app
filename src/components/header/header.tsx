import React from 'react';
import TopMenu from './topMenu/topMenu';
import './header.scss';

interface IProps {
  menuItems: {
    anchor: string,
    linkText: string,
    active: boolean
  }[];
}

interface IState {
  [key: string]: string;
}

class Header extends React.Component<IProps, IState> {
  render() {
    return (
      <div className="header">
        <TopMenu menuItems={this.props.menuItems} />
      </div>
    );
  }
}

export default Header;
