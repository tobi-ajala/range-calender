import React from 'react';
import './App.css';
import Calendar from 'react-calendar-pane';
import moment from 'moment';


class App extends React.Component {
  constructor(){
    super();
    this.state={ fromDate:moment(), toDate:moment() };
  }

  onSelect=(e)=>{
    console.log('this is a date being selected');
  }

  onClickFromDate=(e)=>{
    console.log('this is a from date');
    // this.setState(console.log('this is a from date'));
  }

  onClickToDate=(e)=>{
    console.log('this is a to date');
  }

  render() {
    return(
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <label> From <input type="text" onClick={this.onClickFromDate} value={this.state.fromDate.format('DD/MM/YYYY')} /> </label>
          <label> To <input type="text" onClick={this.onClickToDate} value={this.state.toDate.format('DD/MM/YYYY')} /> </label>
          <Calendar date={moment("23/10/2015", "DD/MM/YYYY")} onSelect={this.onSelect} />
        </div>
      </div>
    )
  }
}

export default App;
