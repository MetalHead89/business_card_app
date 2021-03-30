import React from 'react';
import { IStore } from '../../../ts/interfaces';
import { switchActiveScreenActionCreator } from '../../../ts/redux/app-reducer';
import { clickToMenuItemActionCreator } from '../../../ts/redux/header-reducer';
import TopMenu from './top-menu';
import './top-menu.scss';

const TopMenuContainer = (props: IStore): JSX.Element => {
  /**
   * Обработка клика по пункту меню
   * @param {string} anchor - якорь на который ссылается пункт меню
   */
  const changeActiveScreen = (id: number, anchor: string): void => {
    props.store.dispatch(clickToMenuItemActionCreator(id));
    props.store.dispatch(switchActiveScreenActionCreator(anchor));
  };

  return (
    <TopMenu
      menuItems={props.store.getState().header.topMenu.menuItems}
      changeActiveScreen={changeActiveScreen}
    />
  );
};
export default TopMenuContainer;
