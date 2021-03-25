import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/app';
import '../scss/main.scss';
import { IState } from './interfaces';
import store from './redux/state';

const reRenderApp = (state: IState): void => {
  const destination = document.querySelector('#root');

  if (destination != null) {
    ReactDOM.render(
      <App state={state} selectMenuItem={store.selectMenuItem.bind(store)} />,
      destination
    );
  }
};

store.subscribe(reRenderApp);
reRenderApp(store.getState());
