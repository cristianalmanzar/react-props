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
    const 
    {
      arrayOfNumbers,
      header,
      number,
      multiply,
      text,
      object
    } = this.props

    const isShown = this.props.boolean ? 'Valid': 'Invalid'
    const mappedNumbers = arrayOfNumbers.map(multiply)
    return (
      <div>
        {header}
        <p>{text}</p>
        <p>{number}</p>
        <p>{isShown}</p>
        <p>{mappedNumbers.join(', ')}</p>
        <p>{object.name + ' ' + object.lastname}</p>
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
          text='Example of test'
          header = {<h4>Passing elements thow props</h4>}
          multiply={(number) => number * 2}
          >
        </Text>
      </header>
    </div>
  );
}

export default App;
