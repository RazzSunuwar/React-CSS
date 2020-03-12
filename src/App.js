import React from 'react';
// Import the stylesheet in your component: mystyle.module.css to App.js
import styles from './mystyle.module.css';

class Car extends React.Component {
  render(){
    return <h1 className={styles.bigblue}>Hello Car!</h1>
  }

}

export default Car;
