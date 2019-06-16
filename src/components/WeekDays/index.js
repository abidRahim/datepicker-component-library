import React, { Component } from 'react';
import { WEEKDAYS } from '../../util/calendarMethod';
import './WeekDays.css';

class WeekDays extends Component {
  render() {

    return(
      <div className="header-week">
        { Object.keys(WEEKDAYS).map((day, i) => {
          return <span className="weekday" key={day}>{ WEEKDAYS[day] }</span>
        }) }
      </div>
    );
  }
}

export default WeekDays;