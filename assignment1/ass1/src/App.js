import React, { Component } from 'react';

import './App.css';
import UserOutput from './UserOutput';
import UserInput from './UserInput';
import SMA from './components/SMA';

class App extends Component {
  state= {
    username: 'supermax',
    sma: {}
  }
  componentDidMount() {
    fetch('https://www.alphavantage.co/query?function=SMA&symbol=MSFT&interval=daily&time_period=10&series_type=open&apikey=QWAZUD4WW32N18NDs')
    .then(res => res.json())
    .then((data) => {
      this.setState({ sma: data })
    })
    .catch(console.log)

  }
  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value})
  }
  render () {
    return (
      <div className = "App"> 
    <p> fine </p>
    <UserInput changed= {this.usernameChangedHandler}
    currentName={this.state.username}/>
    <UserOutput userName={this.state.username}/>
    <UserOutput userName={this.state.username}/>
    <UserOutput userName="Max"/>
    <SMA sma={this.state.sma["Technical Analysis: SMA"]} />
  
      </div>
  
    );
  }

}
export default App;
