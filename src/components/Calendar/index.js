import React, { Component } from 'react';
import WeekDays from '../WeekDays';
import MonthDays from '../MonthDays';
import { CalendarContext } from '../../App';
import './Calendar.css';

class Calendar extends Component {
  render() {
    return (
      <>
        <WeekDays />
        <CalendarContext.Consumer>
        {({state, onDateChange}) => {
          return (
            <div className="calendar-body">
              <MonthDays date={state.current} onDateChange={onDateChange}/>
            </div>
          )
        }}
        </CalendarContext.Consumer>
      </>
    );
  }
}

export default Calendar;