import React from 'react';
import '../index.css';
//import Button from '../container/Button';


const Display = props => {
    console.log(props)
        return (
        <>
        <div class="col-12 inputview">{props.displayValue}</div>
        </>
    
    )
 }
   




export default Display;