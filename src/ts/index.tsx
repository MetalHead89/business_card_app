import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/app';
import '../scss/main.scss';
import { IState } from './interfaces';
import store from './redux/redux-store';

const reRenderApp = (state: IState): void => {
  const destination = document.querySelector('#root');

  if (destination != null) {
    ReactDOM.render(
      <App state={state} dispatch={store.dispatch.bind(store)} />,
      destination,
    );
  }
};

store.subscribe(() => {
  const state = store.getState();
  reRenderApp(state);
});

const state = store.getState();
reRenderApp(state);
