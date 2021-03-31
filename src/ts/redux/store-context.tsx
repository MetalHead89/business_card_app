import React from 'react';
import { Store } from 'redux';
import { IAction, IState, IStore } from '../interfaces';

const StoreContext = React.createContext({} as Store<IState, IAction>);
const Provider = (props: IStore): JSX.Element => {
  return (
    <StoreContext.Provider value={props.store}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
export { Provider };
