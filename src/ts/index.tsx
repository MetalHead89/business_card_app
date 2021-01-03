import React from 'react';
import ReactDOM from "react-dom";
import App from './components/app';

const destination = document.querySelector('#root');

if (destination != null) {
    ReactDOM.render(
        <App/>,
        destination
    )
}
