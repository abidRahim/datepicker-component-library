import React, { Component } from 'react';
import Calendar from './components/Calendar';
import CalendarHeader from './components/CalendarHeader';
import './App.css';

export const CalendarContext = React.createContext(null);
class App extends Component {  
  state = {
    current: new Date(),
  }

  onDateChange = (current) => {
    this.setState({
      current,
    })
  }

  render() {
    const { current } = this.state;
    return (
      <CalendarContext.Provider value={{
        state: this.state,
        onDateChange: this.onDateChange
      }}>
        <div className="app">
          <CalendarHeader current={current} onDateChange={this.onDateChange}/>
          <Calendar />
        </div>
      </CalendarContext.Provider>
    );
  }  
}

export default App;
