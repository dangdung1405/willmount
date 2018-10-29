import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import ListItem from './dulieu'


class App extends Component {
  constructor(props) {

    super(props)
    console.log('constructor')
    this.state = {
      data: [],
      a: 1
    }
    this.a = 11
  }

  render() {
    console.log('render')
    console.log(this.state.a, this.a)

    return (
      <div className="App">
        <div onClick={() => { this.setState({ show: (this.state.show || 0) + 1 }) }}>Show</div>
        <div onClick={() => { this.setState({ show: 0 }) }}>Hide</div>
        {this.state.show ? <ListItem name={1} dung={this.state.show} /> : null}
      </div>
    );
  }

  componentDidMount() {
    console.log('componentDidMount')

    console.log(this.state.a, this.a)
    this.a = 22
    // this.setState({
    //   a: 2
    // })
    // axios.get('/data_en.json')
    //   .then(response => {
    //     this.setState({
    //       data: response
    //     })
    //     this.data = response
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
  }
}

// class App2 extends Comment {
//   const a 
//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }

export default App;
