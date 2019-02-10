import React, { Component } from 'react';
import './components/calculator.css';


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
  //NUMBERS CLICKS
  handleNumClick = (e) => {
    if (this.state.displayValue === '0') {
      this.setState({ displayValue: e.target.value });

    }
    if (this.state.displayValue !== '0') {
      const newVal = this.state.displayValue.concat(e.target.value)
      this.setState({ displayValue: newVal })
    }
    if (this.state.waitingForNewValue === true) {
      this.setState({ displayValue: e.target.value });
      this.setState({ waitingForNewValue: false });
    }
    if (this.state.waitingForNewValue === true && this.state.displayValue === '0.') {
      const newVal = this.state.displayValue.concat(e.target.value)
      this.setState({ displayValue: newVal })
    }
    if (this.state.operation === 'equals' && this.state.displayValue !== '0') {
      this.setState({ displayValue: e.target.value });
      this.setState({operation: null})
    }
  }


  //PERIOD CLICK
  handlePeriodClick = (e) => {
    if (this.state.waitingForNewValue === true) {
      const newVal = '0.'
      this.setState({ displayValue: newVal })
    }
    else {
      const newVal = this.state.displayValue.concat(e.target.value)
      this.setState({ displayValue: newVal })
    }
  }

  //%,CLEAR,NEG-POS
  handlePercentClick = (e) => {
    const number = parseFloat(this.state.displayValue);
    const percentage = number / 100;
    this.setState({ displayValue: percentage.toString() })
  }

  handleClearClick = (e) => {
    if (this.state.previousValue === null) {
      this.setState({ displayValue: '0' })
    }
    if (this.state.previousValue !== null) {
      this.setState({
        displayValue: this.state.previousValue,
        previousValue: null,
        operation: null,
        waitingForNewValue: false
      })
    }
  }

  handleNegPosClick = (e) => {
    const plusMinus = parseFloat(this.state.displayValue) * -1;
    this.setState({ displayValue: plusMinus.toString() });
  }

  //OPERATIONS 
  handleAddClick = (e) => {
    if (this.state.previousValue !== null) {
      const secondVal = parseFloat(this.state.displayValue);
      const firstVal = parseFloat(this.state.previousValue);
      const sum = firstVal + secondVal;
      this.setState({ displayValue: sum.toString() });
      this.setState({ previousValue: sum.toString() });
      this.setState({ operation: 'add' });
      this.setState({ waitingForNewValue: true });
    }
    if(this.state.previousValue === null) {
      this.setState({ operation: 'add' });
      this.setState({ waitingForNewValue: true });
      this.setState({ previousValue: this.state.displayValue });
    }
    if (this.state.operation === 'multiply') {
      const firstVal = parseFloat(this.state.displayValue);
      const secondVal = parseFloat(this.state.previousValue);
      const multiply = firstVal * secondVal;
      this.setState({ displayValue: multiply.toString() });
      this.setState({ previousValue: multiply.toString() }); 
      this.setState({ operation: 'add' });
    }
    if (this.state.operation === 'divide') {
      const secondVal = parseFloat(this.state.displayValue);
      const firstVal = parseFloat(this.state.previousValue);
      const divide = firstVal / secondVal;
      this.setState({ displayValue: divide.toString() });
      this.setState({ previousValue: divide.toString() });
      this.setState({ operation: 'add' });
    }
    if (this.state.operation === 'subtract') {
      const secondVal = parseFloat(this.state.displayValue);
      const firstVal = parseFloat(this.state.previousValue);
      const subtract = firstVal - secondVal;
      this.setState({ displayValue: subtract.toString() });
      this.setState({ previousValue: subtract.toString() });
      this.setState({ operation: 'add' });   
    }
  }

  handleSubtractClick = (e) => {
    if (this.state.previousValue !== null) {
      const secondVal = parseFloat(this.state.displayValue);
      const firstVal = parseFloat(this.state.previousValue);
      const subtract = firstVal - secondVal;
      this.setState({ displayValue: subtract.toString() });
      this.setState({ previousValue: subtract.toString() });
      this.setState({ operation: 'subtract' });
      this.setState({ waitingForNewValue: true });
    }
    if(this.state.previousValue === null) {
      this.setState({ operation: 'subtract' });
      this.setState({ waitingForNewValue: true });
      this.setState({ previousValue: this.state.displayValue });
    }
    if (this.state.operation === 'add') {
      const firstVal = parseFloat(this.state.displayValue);
      const secondVal = parseFloat(this.state.previousValue);
      console.log('fisrt', firstVal)
      console.log('secon', secondVal)
      const sum = firstVal + secondVal;
      this.setState({ displayValue: sum.toString() });
      this.setState({ previousValue: sum.toString() });  
      this.setState({ operation: 'subtract' }); 
      console.log(sum)
    }
    if (this.state.operation === 'multiply') {
      const firstVal = parseFloat(this.state.displayValue);
      const secondVal = parseFloat(this.state.previousValue);
      const multiply = firstVal * secondVal;
      this.setState({ displayValue: multiply.toString() });
      this.setState({ previousValue: multiply.toString() }); 
      this.setState({ operation: 'subtract' });
    }
    if (this.state.operation === 'divide') {
      const secondVal = parseFloat(this.state.displayValue);
      const firstVal = parseFloat(this.state.previousValue);
      const divide = firstVal / secondVal;
      this.setState({ displayValue: divide.toString() });
      this.setState({ previousValue: divide.toString() });
      this.setState({ operation: 'subtract' });
    }
  }

  handleMultiplyClick = (e) => {
    if (this.state.previousValue !== null) {
      const firstVal = parseFloat(this.state.displayValue);
      const secondVal = parseFloat(this.state.previousValue);
      const multiply = firstVal * secondVal;
      this.setState({ displayValue: multiply.toString() });
      this.setState({ previousValue: multiply.toString() });
      this.setState({ operation: 'multiply' });
      this.setState({ waitingForNewValue: true });
    }
    if(this.state.previousValue === null) {
      this.setState({ operation: 'multiply' });
      this.setState({ waitingForNewValue: true });
      this.setState({ previousValue: this.state.displayValue });
    }
    if (this.state.operation === 'add') {
      const firstVal = parseFloat(this.state.displayValue);
      const secondVal = parseFloat(this.state.previousValue);
      const sum = firstVal + secondVal;
      this.setState({ displayValue: sum.toString() });
      this.setState({ previousValue: sum.toString() });   
      this.setState({ operation: 'multiply' });
    }
    if (this.state.operation === 'subtract') {
      const secondVal = parseFloat(this.state.displayValue);
      const firstVal = parseFloat(this.state.previousValue);
      const subtract = firstVal - secondVal;
      this.setState({ displayValue: subtract.toString() });
      this.setState({ previousValue: subtract.toString() });  
      this.setState({ operation: 'multiply' }); 
    }
    if (this.state.operation === 'divide') {
      const secondVal = parseFloat(this.state.displayValue);
      const firstVal = parseFloat(this.state.previousValue);
      const divide = firstVal / secondVal;
      this.setState({ displayValue: divide.toString() });
      this.setState({ previousValue: divide.toString() });
      this.setState({ operation: 'multiply' });
    }
  }

  handleDivideClick = (e) => {
    if (this.state.previousValue !== null) {
      const secondVal = parseFloat(this.state.displayValue);
      const firstVal = parseFloat(this.state.previousValue);
      const divide = firstVal / secondVal;
      this.setState({ displayValue: divide.toString() });
      this.setState({ previousValue: divide.toString() });
      this.setState({ operation: 'divide' });
      this.setState({ waitingForNewValue: true });
    }
    if (this.state.previousValue === null){
      this.setState({ operation: 'divide' });
      this.setState({ waitingForNewValue: true });
      this.setState({ previousValue: this.state.displayValue });
    }
    if (this.state.operation === 'add') {
      const firstVal = parseFloat(this.state.displayValue);
      const secondVal = parseFloat(this.state.previousValue);
      const sum = firstVal + secondVal;
      this.setState({ displayValue: sum.toString() });
      this.setState({ previousValue: sum.toString() });  
      this.setState({ operation: 'divide' }); 
    }
    if (this.state.operation === 'subtract') {
      const secondVal = parseFloat(this.state.displayValue);
      const firstVal = parseFloat(this.state.previousValue);
      const subtract = firstVal - secondVal;
      this.setState({ displayValue: subtract.toString() });
      this.setState({ previousValue: subtract.toString() });
      this.setState({ operation: 'divide' });  
    }
    if (this.state.operation === 'multiply') {
      const firstVal = parseFloat(this.state.displayValue);
      const secondVal = parseFloat(this.state.previousValue);
      const multiply = firstVal * secondVal;
      this.setState({ displayValue: multiply.toString() });
      this.setState({ previousValue: multiply.toString() }); 
      this.setState({ operation: 'divide' });
    }
  }

  //EQUALS
  handleEqualsClick = (e) => {
    if (this.state.operation === 'add') {
      const firstVal = parseFloat(this.state.displayValue);
      const secondVal = parseFloat(this.state.previousValue);
      const sum = firstVal + secondVal;
      this.setState({ displayValue: sum.toString() });
      this.setState({ previousValue: null })
      this.setState({ operation: 'equals'});
    }
    if (this.state.operation === 'subtract') {
      const secondVal = parseFloat(this.state.displayValue);
      const firstVal = parseFloat(this.state.previousValue);
      const subtract = firstVal - secondVal;
      this.setState({ displayValue: subtract.toString() });
      this.setState({ previousValue: null })
      this.setState({ operation: 'equals'});
    }
    if (this.state.operation === 'multiply') {
      const firstVal = parseFloat(this.state.displayValue);
      const secondVal = parseFloat(this.state.previousValue);
      const multiply = firstVal * secondVal;
      this.setState({ displayValue: multiply.toString() });
      this.setState({ previousValue: null })
      this.setState({ operation: 'equals'});
    }
    if (this.state.operation === 'divide') {
      const secondVal = parseFloat(this.state.displayValue);
      const firstVal = parseFloat(this.state.previousValue);
      const divide = firstVal / secondVal;
      this.setState({ displayValue: divide.toString() });
      this.setState({ previousValue: null })
      this.setState({ operation: 'equals'});
    }
    if (this.state.previousValue === null) {
      this.setState({ displayValue: this.state.displayValue });
      this.setState({ operation: 'equals'});
    }
  }

  render() {
    //CLEAR BUTTON TOGGLE DISPLAY
    const toggleClear = this.state.previousValue ? <button className="button col-3" onClick={this.handleClearClick}>C</button> :
      <button className="button col-3" onClick={this.handleClearClick}>AC</button>;
    return (

      <>
        <div className='holder'>
          <div className='calculator'>
            <div className='row'>
              <div className="col-12 inputview">{this.state.displayValue}</div>
              {toggleClear}
              <button className="button col-3" onClick={this.handlePercentClick}>%</button>
              <button className="button col-3" onClick={this.handleNegPosClick}>±</button>
              <button className="button col-3 orange" onClick={this.handleDivideClick}>÷</button>
              <button className="button col-3" onClick={this.handleNumClick} value='7' >7</button>
              <button className="button col-3" onClick={this.handleNumClick} value='8' >8</button>
              <button className="button col-3" onClick={this.handleNumClick} value='9' >9</button>
              <button className="button col-3 orange" onClick={this.handleMultiplyClick}>x</button>
              <button className="button col-3" onClick={this.handleNumClick} value='4' >4</button>
              <button className="button col-3" onClick={this.handleNumClick} value='5' >5</button>
              <button className="button col-3" onClick={this.handleNumClick} value='6' >6</button>
              <button className="button col-3 orange" onClick={this.handleSubtractClick}>-</button>
              <button className="button col-3" value='1' onClick={this.handleNumClick}>1</button>
              <button className="button col-3" onClick={this.handleNumClick} value='2' >2</button>
              <button className="button col-3" onClick={this.handleNumClick} value='3' >3</button>
              <button className="button col-3 orange" onClick={this.handleAddClick}>+</button>
              <button className="button col-6" onClick={this.handleNumClick} value='0' >0</button>
              <button className="button col-3" onClick={this.handlePeriodClick} value='.' >.</button>
              <button className="button col-3 orange" onClick={this.handleEqualsClick}>=</button>
            </div>
          </div>
        </div>
      </>

    )
  }
}


export default App