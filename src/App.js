import React from 'react';
import './App.css';
import Calendar from 'react-calendar-pane';
import moment from 'moment';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      fromDate:moment(), toDate:moment(),
    }
  }

  // setState() {

  // }
 
  // handleonSelect(date, previousDate, currentMonth) {
  //   console.log(date)
  //   //this.setState({fromDate:date}).bind(this)
  // }

  // onSelect=(e)=>{
  //   this.setState({toDate:e})
  // }

  onSelect=(e)=>{
    this.setState({fromDate:e}, console.log('this is a from date'));
    this.setState({toDate:e}, console.log('this is a to date'));
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  render() {
    return(
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <label> From <input type="text" value={this.state.fromDate.format('DD/MM/YYYY')} onChange={this.handleChange} /> </label>
          <label> To <input type="text" value={this.state.toDate.format('DD/MM/YYYY')} /> </label>
          <Calendar date={moment("23/10/2015", "DD/MM/YYYY")} onSelect={this.onSelect} />

        </div>
      </div>
    )
  }
}

export default App;
