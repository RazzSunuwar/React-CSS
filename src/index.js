import React from 'react';
import ReactDOM from 'react-dom';
// Note: Import the stylesheet in your application:

import './index.css';
// import App from './App';

class MyHeader extends React.Component {
    render(){

        return (
            <div>
                <h1>Hello Style!</h1>
                <p>Adding a title style !</p>
            </div>
        );
    }
}
ReactDOM.render(<MyHeader />, document.getElementById('root'));
