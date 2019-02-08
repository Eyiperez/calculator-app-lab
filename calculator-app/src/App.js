import React, { Component } from 'react';
//import Display from './components/display';
import './index.css';
//import Button from './container/Button';


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
    if (this.state.displayValue === '0') {
      this.setState({ displayValue: e.target.value });

    }
    if (this.state.displayValue !== '0') {
      const newVal = this.state.displayValue.concat(e.target.value)
      this.setState({ displayValue: newVal })
    }
   if(this.state.waitingForNewValue === true) {
      this.setState({ displayValue: e.target.value });
      this.setState({ waitingForNewValue: false });
    }
    

  }

  handlePeriodClick = (e) => {
    const newVal = this.state.displayValue.concat(e.target.value)
      this.setState({ displayValue: newVal })
  }

  handleClearClick = (e) => {
    if (this.state.previousValue === null) {
      this.setState({ displayValue: 0 })
    }
    if (this.state.previousValue !== null) {
      this.setState({
        displayValue: '0',
        previousValue: null,
        operation: null,
        waitingForNewValue: false
      })
    }
  }

  handleAddClick = (e) => {
    this.setState({ operation: 'add' });
    this.setState({ waitingForNewValue: true });
    this.setState({ previousValue: this.state.displayValue });
    console.log(this.state)
  }

  handleEqualsClick = (e) => {
    if (this.state.operation === 'add') {
      const sum = parseInt(this.state.displayValue) + parseInt(this.state.previousValue);
      this.setState({ displayValue: sum });
      console.log(this.state)
    }
  }

  render() {
    return (

      <>
        <div className='holder'>
          <div className='calculator'>
            <div className='row'>
              <div className="col-12 inputview">{this.state.displayValue}</div>
              <button className="button col-3" onClick={this.handleClearClick} value='0'>AC</button>
              <button className="button col-3">%</button>
              <button className="button col-3">±</button>
              <button className="button col-3 orange">÷</button>
              <button className="button col-3" onClick={this.handleNumClick} value='7' >7</button>
              <button className="button col-3" onClick={this.handleNumClick} value='8' >8</button>
              <button className="button col-3" onClick={this.handleNumClick} value='9' >9</button>
              <button className="button col-3 orange">x</button>
              <button className="button col-3" onClick={this.handleNumClick} value='4' >4</button>
              <button className="button col-3" onClick={this.handleNumClick} value='5' >5</button>
              <button className="button col-3" onClick={this.handleNumClick} value='6' >6</button>
              <button className="button col-3 orange">-</button>
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



export default App;
