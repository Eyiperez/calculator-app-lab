import React, { Component } from 'react';
//import Button from './components/Button';
import Display from './components/display';
import './index.css';


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

  render() {
    return (
      <>
        <div className='holder'>
          <div className='calculator'>
            <div className='row'>
              <Display />
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
              <button class="button col-3">1</button>
              <button class="button col-3">2</button>
              <button class="button col-3">3</button>
              <button class="button col-3 orange">+</button>
              <button class="button col-6">0</button>
              <button class="button col-3">.</button>
              <button class="button col-3 orange">=</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}



export default App;
