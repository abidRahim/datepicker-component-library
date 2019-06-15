import React, { Component } from 'react';
import WeekDays from '../WeekDays';
import MonthDays from '../MonthDays';
import './Calendar.css';

class Calendar extends Component {
  render() {
    return (
      <>
        <WeekDays />
        <div className="calendar-body">
          <MonthDays />
        </div>
      </>
    );
  }
}

export default Calendar;