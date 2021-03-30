import React from 'react';
import { NavLink } from 'react-router-dom';
import { ITopMenu } from '../../../ts/interfaces';
import { switchActiveScreenActionCreator } from '../../../ts/redux/app-reducer';
import { clickToMenuItemActionCreator } from '../../../ts/redux/header-reducer';
import './top-menu.scss';

const TopMenu = (props: ITopMenu): JSX.Element => {
  /**
   * Обработка клика по пункту меню
   * @param {string} anchor - якорь на который ссылается пункт меню
   */
  function followLink(id: number, anchor: string): void {
    props.dispatch(clickToMenuItemActionCreator(id));
    props.dispatch(switchActiveScreenActionCreator(anchor));
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
        <NavLink
          to={`#${item.anchor}`}
          className={classes}
          onClick={() => followLink(item.id, item.anchor)}
        >
          {item.linkText}
        </NavLink>
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
