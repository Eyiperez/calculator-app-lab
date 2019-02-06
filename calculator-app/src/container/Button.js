import React, { Component } from 'react';
import '../index.css';
//import Display from '../components/display';

class Button extends Component  {
    constructor(props) {
        super(props);
        this.state = {
    
          displayValue: '0',
          previousValue: null,
          operation: null,
          waitingForNewValue: false
    
        }
      }
handleNumClick = (e) => {
this.setState({displayValue : e.target.value});

}

      render(){
        return (
        <>
        <button class="button col-3">AC</button>
        <button class="button col-3">%</button>
        <button class="button col-3">±</button>
        <button class="button col-3 orange">÷</button>
        <button class="button col-3">7</button>
        <button class="button col-3">8</button>
        <button class="button col-3">9</button>
        <button class="button col-3 orange">x</button>
        <button class="button col-3">4</button>
        <button class="button col-3">5</button>
        <button class="button col-3">6</button>
        <button class="button col-3 orange">-</button>
        <button class="button col-3" value= '1' onClick={this.handleNumClick}>1</button>
        <button class="button col-3">2</button>
        <button class="button col-3">3</button>
        <button class="button col-3 orange">+</button>
        <button class="button col-6">0</button>
        <button class="button col-3">.</button>
        <button class="button col-3 orange">=</button>
        </>
    
    )
 }
}  




export default Button;