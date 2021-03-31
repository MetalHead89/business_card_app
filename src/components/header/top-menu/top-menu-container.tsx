import React from 'react';
import { switchActiveScreenActionCreator } from '../../../ts/redux/app-reducer';
import { clickToMenuItemActionCreator } from '../../../ts/redux/header-reducer';
import StoreContext from '../../../ts/redux/store-context';
import TopMenu from './top-menu';
import './top-menu.scss';

const TopMenuContainer = (): JSX.Element => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        /**
         * Обработка клика по пункту меню
         * @param {string} anchor - якорь на который ссылается пункт меню
         */
        const changeActiveScreen = (id: number, anchor: string): void => {
          store.dispatch(clickToMenuItemActionCreator(id));
          store.dispatch(switchActiveScreenActionCreator(anchor));
        };

        return (
          <TopMenu
            menuItems={store.getState().header.topMenu.menuItems}
            changeActiveScreen={changeActiveScreen}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
export default TopMenuContainer;
