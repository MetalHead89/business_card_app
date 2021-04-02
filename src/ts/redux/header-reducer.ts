import { IAction, IHeaderState } from '../interfaces';

const CLICK_TO_MENU_ITEM = 'CLICK-TO-MENU-ITEM';
const initialState = {
  topMenu: {
    menuItems: [
      { id: 1, anchor: 'about', linkText: 'Обо мне', active: true },
      { id: 2, anchor: 'skills', linkText: 'Навыки', active: false },
      { id: 3, anchor: 'services', linkText: 'Услуги', active: false },
      { id: 4, anchor: 'contacts', linkText: 'Контакты', active: false },
    ],
  },
};

const clickToMenuItemActionCreator = (id: number): IAction => ({
  type: CLICK_TO_MENU_ITEM,
  args: { id },
});

const headerReducer = (
  state: IHeaderState = initialState,
  action: IAction,
): IHeaderState => {
  switch (action.type) {
    case CLICK_TO_MENU_ITEM:
      return {
        ...state,
        topMenu: {
          menuItems: state.topMenu.menuItems.map((item) => {
            return item.id === action.args.id
              ? { ...item, active: true }
              : { ...item, active: false };
          }),
        },
      };
    default:
      return state;
  }
};

export default headerReducer;
export { clickToMenuItemActionCreator };
