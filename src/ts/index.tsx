import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '../components/app';
import '../scss/main.scss';
import store from './redux/redux-store';

const reRenderApp = (): void => {
  const destination = document.querySelector('#root');

  if (destination != null) {
    ReactDOM.render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>,
      destination,
    );
  }
};

store.subscribe(() => {
  reRenderApp();
  window.location.hash = `#${store.getState().app.activeScreen}`;
});

reRenderApp();
window.location.hash = `#${store.getState().app.activeScreen}`;
