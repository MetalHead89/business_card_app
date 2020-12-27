import React from 'react'
import ReactDOM from "react-dom";

class App extends React.Component {
    render() {
        return (
            <div>
                test text
            </div>
        );
    }
}

const destination = document.querySelector('#root');

ReactDOM.render(
    <div>
        <App />
    </div>,
    destination
);