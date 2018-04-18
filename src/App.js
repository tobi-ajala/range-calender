import React from 'react';
import './App.css';
import Calendar from 'react-calendar-pane';
import moment from 'moment';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      date: {
        from: '',
        to: '',
      },
      errors: {},
      dateType: '', // it's the current selected type of date - either to or from
    };
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(date) {
    const selectedDate = moment(date, 'DD/MM/YYYY');
    const errors = {};
    const state = this.state;
    if (state.dateType.toLowerCase() === 'to') {
      if (
        selectedDate.isBefore(moment(state['date']['from'], 'DD/MM/YYYY')) ||
        selectedDate.isSame(moment(state['date']['from'], 'DD/MM/YYYY'))
      ) {
        // Add message to the errors object
        errors.message =
          'You are only allowed to select a date ahead of the From date.';
      }
    }
    if (state.dateType.toLowerCase() === 'from') {
      if (
        selectedDate.isAfter(moment(state['date']['to'], 'DD/MM/YYYY')) ||
        selectedDate.isSame(moment(state['date']['to'], 'DD/MM/YYYY'))
      ) {
        // Add message to the errors object
        errors.message =
          'You are only allowed to select a date before the To date.';
      }
    }
    if (state.dateType.toLowerCase() === 'from' || 'to') {
      if (
        selectedDate.isAfter(moment())
      ) {
        // Add message to the errors object
        errors.message =
          'You cannot select a date that has not yet occured.';
      }
    }
    if (!Object.keys(errors).length > 0) {
      state['errors'] = {};
      state['date'][state.dateType.toLowerCase()] = selectedDate.format(
        'DD/MM/YYYY',
      );
      state['show'] = false;
      this.setState(state);
    } else {
      state['errors'] = errors;
      this.setState(state);
    }
  }

  show = event => {
    const state = this.state;
    state.show = true;
    state.dateType = event.target.id;
    state.errors = {};
    if (state.dateType === 'from') state.date.to = '';
    this.setState(state);
  };

  close = () => {
    const state = this.state;
    state.show = false;
    state.dateType = '';
    state.errors = {};
    this.setState(state);
  };

  render() {
    const { date, dateType, errors } = this.state;
    const calendarDate = date[dateType.toLowerCase()]
      ? date[dateType.toLowerCase()]
      : moment().format('DD/MM/YYYY');
    return (
      <div>
        <div className='App'>
          <header className='App-header row'>
            <h1 className='App-title'>Welcome to React</h1>
          </header>
          <div>
            <form>
              <div>
                <label className='From'>
                  From
                </label>
                <input
                  type='text'
                  id='From'
                  onClick={this.show}
                  value={date.from}
                />
              </div>
              <div>
                <label className='To'>
                  To
                </label>
                <input
                  type='text'
                  id='To'
                  onClick={this.show}
                  value={date.to}
                />
              </div>
            </form>
          </div>
          <div>
            <a>{errors.message && <p>{errors.message}</p>}</a>
            <h3> Select {dateType} Date</h3>
            <Calendar
              date={moment(calendarDate, 'DD/MM/YYYY')}
              onSelect={this.onSelect}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
