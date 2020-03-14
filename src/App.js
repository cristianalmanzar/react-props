import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class Hello extends Component {
  render () {
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component {
  render () {
    const isShown = this.props.boolean ? 'Valid': 'Invalid'
    return (
      <div>
        <p>{this.props.text}</p>
        <p>{this.props.number}</p>
        <p>{isShown}</p>
        <p>{this.props.arrayOfNumbers.join(', ')}</p>
        <p>{this.props.object.name + ' ' + this.props.object.lastname}</p>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Hello title='Hello From Props'/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende React
        </a>
        <Text 
          arrayOfNumbers={[1,2,3]}
          object={{name: 'Cristian', lastname: 'Almanzar'}}
          boolean={true}
          number={11}
          text='Example of test'>
        </Text>
      </header>
    </div>
  );
}

export default App;
