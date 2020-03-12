import React from 'react';
import ReactDOM from 'react-dom';
// Example: Insert an object with the styling information:

// import './index.css';
// import App from './App';

class MyHeader extends React.Component {
    render(){
        return (
            <div>
                <h1 style= {{color : "#76FF03"}}>Hello Style!</h1>
                <p>Adding a title style !</p>
            </div>
        )
    }
}
ReactDOM.render(<MyHeader />, document.getElementById('root'));

// Note: In JSX, JavaScript expressions are written inside curly braces, and since JavaScript
// objects also use curly braces, the styling in the example above is written inside two sets
// of curly braces {{}}.