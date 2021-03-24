import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/app';
import '../scss/main.scss';
import state, { subscribe } from './redux/state';
import { selectMenuItem } from './redux/state';

interface IState {
  header: {
    menuItems: {
      id: number;
      anchor: string;
      linkText: string;
      active: boolean;
    }[];
  };
  aboutScreen: {
    text: string[];
    photoLink: string;
  };
  skillsScreen: {
    iconClasses: string[];
  };
}

const reRenderApp = (state: IState): void => {
  const destination = document.querySelector('#root');

  if (destination != null) {
    ReactDOM.render(
      <App state={state} selectMenuItem={selectMenuItem} />,
      destination
    );
  }
};

subscribe(reRenderApp);
reRenderApp(state);
