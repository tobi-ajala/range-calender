import React from 'react';
import './App.css';
import Calendar from 'react-calendar-pane';
import moment from 'moment';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      todaysDate:moment(),
      clicktype:null //1 for fromdate, 2 for todate   
    };
  }

  onSelect=(e)=>{
    if (
      this.state.clicktype===1){ 
        //set from date 
        //onSelect = this.moment().format('DD/MM/YYYY'); DOESN'T WORK
        console.log(moment().format('DD/MM/YYYY'), 'is a from date');
      } else { 
        //set to date 
        console.log('this is a to date');
      }
  }

  onClickFromDate=(e)=>{
    console.log('this is a from date input');
    this.setState({ clicktype:1})
  }

  onClickToDate=(e)=>{
    console.log('this is a to date input');
    this.setState({ clicktype:2})
  }

  render() {
    return(
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <label> From <input type="text" onClick={this.onClickFromDate} value={this.state.todaysDate.format('DD/MM/YYYY')} /> </label>
          <label> To <input type="text" onClick={this.onClickToDate} value={this.state.todaysDate.format('DD/MM/YYYY')} /> </label>
          <Calendar onSelect={this.onSelect} />
        </div>
      </div>
    )
  }
}

export default App;
