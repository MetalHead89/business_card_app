import React from 'react';
import './top-menu.scss';

interface IProps {
  menuItems: {
    id: number;
    anchor: string;
    linkText: string;
    active: boolean;
  }[];
  selectMenuItem: {
    (id: number): void;
  };
}

const TopMenu = (props: IProps): JSX.Element => {
  /**
   * Обработка клика по пункту меню
   * @param {string} anchor - якорь на который ссылается пункт меню
   */
  function followLink(id: number, anchor: string): void {
    props.selectMenuItem(id);
    window.location.hash = `#${anchor}`;
  }

  /**
   * Массив с jsx разметкой пунктов меню
   */
  const menuItems = props.menuItems.map((item, i) => {
    let classes = 'top-menu__menu-link';
    if (item.active) {
      classes += ' top-menu__menu-link_active';
    }

    return (
      <li key={i} className="top-menu__menu-item">
        <a
          className={classes}
          onClick={followLink.bind(this, item.id, item.anchor)}
        >
          {item.linkText}
        </a>
      </li>
    );
  });

  return (
    <nav className="top-menu">
      <ul className="top-menu__menu">{menuItems}</ul>
    </nav>
  );
};

export default TopMenu;
