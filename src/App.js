import React, { Component } from 'react';
import Calendar from './components/Calendar';
import CalendarHeader from './components/CalendarHeader';
// import { CalendarContext } from './CalendarContext';
import './App.css';

class App extends Component {
  render() {    
    return (
      // <CalendarContext.Provider>
        <div className="app">
          <CalendarHeader current={new Date()} />
          <Calendar current={new Date()}/>
        </div>
      // </CalendarContext.Provider>
    );
  }  
}

export default App;
