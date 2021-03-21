import React from 'react';
import './topMenu.scss';

interface IProps {
  menuItems: {
    anchor: string;
    linkText: string;
    active: boolean;
  }[];
}

const TopMenu = (props: IProps): JSX.Element => {
  /**
   * Обработка клика по пункту меню
   * @param {string} anchor - якорь на который ссылается пункт меню
   */
  function followTheLink(anchor: string): void {
    window.location.hash = `#${anchor}`;
  }

  /**
   * Массив с jsx разметкой пунктов меню
   */
  const menuItems = props.menuItems.map((item, i) => {
    let classes = 'topMenu__menu-link';
    if (item.active) {
      classes += ' topMenu__menu-link_active';
    }

    return (
      <li key={i} className="topMenu__menu-item">
        <a className={classes} onClick={followTheLink.bind(this, item.anchor)}>
          {item.linkText}
        </a>
      </li>
    );
  });

  return (
    <nav className="topMenu">
      <ul className="topMenu__menu">{menuItems}</ul>
    </nav>
  );
};

export default TopMenu;
