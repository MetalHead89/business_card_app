import { IAction, IAppState } from '../interfaces';

const CHANGED_ACTIVE_SCREEN = 'CHANGED-ACTIVE-SCREEN';
const initialState = {
  activeScreen: 'about',
};

const switchActiveScreenActionCreator = (activeScreen: string): IAction => ({
  type: CHANGED_ACTIVE_SCREEN,
  args: { activeScreen },
});

const appReducer = (
  state: IAppState = initialState,
  action: IAction,
): IAppState => {
  switch (action.type) {
    case CHANGED_ACTIVE_SCREEN:
      state.activeScreen = action.args.activeScreen;
      return state;
    default:
      return state;
  }
};

export default appReducer;
export { switchActiveScreenActionCreator };
