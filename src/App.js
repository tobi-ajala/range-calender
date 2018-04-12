import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from 'react-calendar-pane';
import moment, { calendarFormat } from 'moment';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p> From:   /  /   </p>
        <p> To:   /  /   </p>
        <Calendar date={moment("23/10/2015", "DD/MM/YYYY")} onSelect={this.onSelect} />
      </div>
    );
  }
}
console.log('the date is', this.onSelect, calendarFormat)

export default App;
