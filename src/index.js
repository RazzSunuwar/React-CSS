import React from 'react';
import ReactDOM from 'react-dom';
// Example: Use backgroundColor instead of background-color:

// import './index.css';
// import App from './App';

class MyHeader extends React.Component {
    render(){
        return (
            <div>
                <h1 style= {{backgroundColor : "#76FF03"}}>Hello Style!</h1>
                <p>Adding a title style !</p>
            </div>
        )
    }
}
ReactDOM.render(<MyHeader />, document.getElementById('root'));
