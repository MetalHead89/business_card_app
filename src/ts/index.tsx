import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../components/app';
import '../scss/main.scss';
import { IState } from './interfaces';
import store from './redux/redux-store';

const reRenderApp = (state: IState): void => {
  const destination = document.querySelector('#root');

  if (destination != null) {
    ReactDOM.render(
      <BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)} />
      </BrowserRouter>,
      destination,
    );
  }
};

store.subscribe(() => {
  const state = store.getState();
  reRenderApp(state);
  window.location.hash = `#${state.app.activeScreen}`;
});

const state = store.getState();
reRenderApp(state);
window.location.hash = `#${state.app.activeScreen}`;
