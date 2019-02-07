import React, { Component } from 'react';
import Display from './components/display';
import './index.css';
import Button from './container/Button';


class App extends Component {
 
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
console.log(e.target.value)
this.setState({displayValue : e.target.value});

}

  render(){
    return (
    
    <>
    <div className = 'row'> 
    <div class="col-12 inputview">{this.state.displayValue}</div>
    <button class="button col-3" onClick={this.handleNumClick} value='0'>AC</button>
    <button class="button col-3">%</button>
    <button class="button col-3">±</button>
    <button class="button col-3 orange">÷</button>
    <button class="button col-3" onClick={this.handleNumClick} value='7' >7</button>
    <button class="button col-3" onClick={this.handleNumClick} value='8' >8</button>
    <button class="button col-3" onClick={this.handleNumClick} value='9' >9</button>
    <button class="button col-3 orange">x</button>
    <button class="button col-3" onClick={this.handleNumClick} value='4' >4</button>
    <button class="button col-3" onClick={this.handleNumClick} value='5' >5</button>
    <button class="button col-3" onClick={this.handleNumClick} value='6' >6</button>
    <button class="button col-3 orange">-</button>
    <button class="button col-3" value= '1' onClick={this.handleNumClick}>1</button>
    <button class="button col-3" onClick={this.handleNumClick} value='2' >2</button>
    <button class="button col-3" onClick={this.handleNumClick} value='3' >3</button>
    <button class="button col-3 orange">+</button>
    <button class="button col-6" onClick={this.handleNumClick} value='0' >0</button>
    <button class="button col-3" onClick={this.handleNumClick} value='.' >.</button>
    <button class="button col-3 orange">=</button>
    </div>
    </>

)
}
}



export default App;
