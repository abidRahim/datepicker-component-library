import React, { Component } from 'react';
import WeekDays from '../WeekDays';
import MonthDays from '../MonthDays';
import './Calendar.css';

class Calendar extends Component {
  render() {
    const { current } = this.props;

    return(
      <>
        <WeekDays />
        <div className="calendar-body">
          <MonthDays date={current}/>
        </div>
      </>
    );
  }
}

export default Calendar;