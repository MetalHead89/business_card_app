import { connect } from 'react-redux';
import { IState, IDispatch } from '../../../ts/interfaces';
import { switchActiveScreenActionCreator } from '../../../ts/redux/app-reducer';
import { clickToMenuItemActionCreator } from '../../../ts/redux/header-reducer';
import TopMenu from './top-menu';
import './top-menu.scss';

const mapStateToProps = (state: IState) => {
  return {
    menuItems: state.header.topMenu.menuItems,
  };
};

const mapDispatchToProps = (dispatch: IDispatch) => {
  return {
    changeActiveScreen: (id: number, anchor: string): void => {
      dispatch(clickToMenuItemActionCreator(id));
      dispatch(switchActiveScreenActionCreator(anchor));
    },
  };
};

const TopMenuContainer = connect(mapStateToProps, mapDispatchToProps)(TopMenu);

export default TopMenuContainer;
