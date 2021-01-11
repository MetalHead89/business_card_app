import React from "react";
import "./topMenu.scss";

interface IProps {
  menuItems: {
    anchor: string;
    linkText: string;
    active: boolean;
  }[];
}

interface IState {
  [key: string]: string;
}

class TopMenu extends React.Component<IProps, IState> {
  menuItems = this.props.menuItems.map((item, i) => {
    let classes = "topMenu__menu-link";
    if (item.active) {
      classes += " topMenu__menu-link_active";
    }

    return (
      <li key={i} className="topMenu__menu-item">
        <a
          className={classes}
          onClick={() => (window.location.hash = `#${item.anchor}`)}
        >
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
