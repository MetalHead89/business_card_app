import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/app';
import '../scss/main.scss';
import state from './redux/state'


const destination = document.querySelector('#root');

if (destination != null) {
  ReactDOM.render(<App state={state} />, destination);
}
