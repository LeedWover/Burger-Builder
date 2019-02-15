import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = props => (
  <div className={classes.Logo} style={{height: props.height, marginBottom: props.margin}}>
    <img src={burgerLogo} alt="BurgerBuilder" />
  </div>
);

export default logo;