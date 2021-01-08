import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/app';
import '../scss/main.scss';

const menuItems = [
  { path: '/about', linkText: 'Обо мне' },
  { path: '/skills', linkText: 'Навыки' },
  { path: '/services', linkText: 'Услуги' },
  { path: '/contacts', linkText: 'Контакты' },
];

const destination = document.querySelector('#root');

if (destination != null) {
  ReactDOM.render(<App menuItems={menuItems} />, destination);
}
