import { IAction, IHeaderState } from '../interfaces';

const CLICK_TO_MENU_ITEM = 'CLICK-TO-MENU-ITEM';

const clickToMenuItemActionCreator = (id: number): IAction => ({
  type: CLICK_TO_MENU_ITEM,
  args: { id },
});

const headerReducer = (state: IHeaderState, action: IAction): IHeaderState => {
  switch (action.type) {
    case CLICK_TO_MENU_ITEM:
      state.topMenu.menuItems.forEach((item) => {
        item.active = item.id === action.args.id ? true : false;
      });
      return state;
    default:
      return state;
  }
};

export default headerReducer;
export { clickToMenuItemActionCreator };
