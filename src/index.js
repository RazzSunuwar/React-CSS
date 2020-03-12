import React from 'react';
import ReactDOM from 'react-dom';
// Example: Use backgroundColor instead of background-color:

// import './index.css';
// import App from './App';

class MyHeader extends React.Component {
    render(){
        const mystyle = {
            color: "white",
            backgroundColor : "green",
            padding: "100px",
            textAlign: "center",
            fontFamily: "Roboto"
        };
        return (
            <div>
                <h1 style= {mystyle}>Hello Style!</h1>
                <p>Adding a title style !</p>
            </div>
        )
    }
}
ReactDOM.render(<MyHeader />, document.getElementById('root'));
