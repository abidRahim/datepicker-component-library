import React, { Component } from 'react';
import InputComponent from './components/InputComponent';
import CalendarComponent from './components/CalendarComponent';
import './App.css';

export const CalendarContext = React.createContext(null);
class App extends Component {
  constructor(props) {
    super(props);
    this.showCalendarComponent = this.showCalendarComponent.bind(this);
  }

  componentDidMount = () => {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  state = {
    current: new Date(),
    showCalendar: false,
  }

  onDateChange = (current) => {
    this.setState({
      current,
    })
  }

  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      return;
    }

    this.showCalendarComponent(false);
  }

  showCalendarComponent = (showCalendar) => {    
    this.setState({
      showCalendar,
    })
  }

  render() {
    const { current, showCalendar } = this.state;
    return (
      <React.Fragment>
        <CalendarContext.Provider value={{
          state: this.state,
          onDateChange: this.onDateChange
        }}>
          <div className="app" ref={node => this.node = node} onClick={() => this.showCalendarComponent(true)}>
            <InputComponent current={current} />
            { showCalendar ?
              <CalendarComponent current={current} onDateChange={this.onDateChange}/> : ''
            }
          </div>
        </CalendarContext.Provider>
      </React.Fragment>
    );
  }
}

export default App;
