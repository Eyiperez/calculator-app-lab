import React, { Component } from 'react';
import Button from './components/Button';
import Display from './components/display';
import './index.css';


class App extends Component {

  render() {
    return (
      <>
      <div className='holder'>
        <div className='calculator'>
          <div className='row'>
            <Display/>
            <Button/>
          </div>
        </div>
      </div>
      </>
    );
  }
}



export default App;
