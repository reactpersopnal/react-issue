import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kindOfPage: 'foo',
            reduxState: {
                value: 20,
                value1: 10
            },
        }
    }

    changeRedux() {
        if (this.state.kindOfPage === 'foo') {
            this.setState({
                kindOfPage: 'bar'
            })
        } else {
            this.setState({
                kindOfPage: 'foo'
            })
        }
        console.log(this.state.kindOfPage)
        this.forceUpdate()
    }

    renderInput () {
        var page = this.state.kindOfPage
        var rState = this.state.reduxState;
        if (page === 'foo') {
            // foo input
            // eg. rState.value === 10
            return <input type="string" placeholder={rState.value1} key={"input1"}
                          onChange={this.handleBar} />
        } else {
            // bar input
            // eg. rState.value === 20
            console.log('test')
            return <input type="string" placeholder={rState.value} key={"input2"}
                          onChange={this.handleFoo} />
        }
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <button onClick={this.changeRedux.bind(this)}>更换</button>
          {this.renderInput()}
      </div>
    );
  }
}

export default App;
