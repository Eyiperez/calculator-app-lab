import React, { Component } from 'react';
import './calculator.css';

const Button = (props) => {
    return (
        <>
 <button className="button col-3" value={props.value} >{props.value}</button>
        </>
    );
  }
  
  export default Button;