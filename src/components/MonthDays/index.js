import React, { Component } from 'react';
import calendarMethod, {  
  isSameDay,
  isSameMonth,
  getDateISO,
  CALENDAR_MONTHS
} from '../../util/calendarMethod';
import './MonthDays.css';

class MonthDays extends Component {
  state = {
    today: new Date(),
  }
  
  getCalendarDates = (current) => {
    const calendarMonth = +current.getMonth() + 1;
    const calendarYear = current.getFullYear();
    
    return calendarMethod(calendarMonth, calendarYear);
  };

  onCalendarDateChange = (currentDate) => {    
    this.props.onDateChange(currentDate);
  }

  render() {
    const { today } = this.state;
    const { current } = this.props;
    
    return (
      <>
        {this.getCalendarDates(current).map((date, index) => {          
          const _date = new Date(date.join("-"));          
          const [year, month, day] = date;
          const isToday = isSameDay(_date, today);
          const isCurrent = isSameDay(_date, current);
          const isCurrentMonth = isSameMonth(_date, current);
          const monthString = CALENDAR_MONTHS[Object.keys(CALENDAR_MONTHS)[month - 1]];

          return (
            <span className={`body-date ${isCurrentMonth ? 'current-month' : ''} ${isCurrent ? 'active-date' : ''} ${isToday ? 'today-date' : ''}`} key={getDateISO(new Date(year, month, day)) + index} onClick={() => {this.onCalendarDateChange(_date)}}>
              {isToday ? <center className="active-body-text">{!isCurrent ? 'Today' : ''}</center> : null}
              {isCurrent ? <center className="active-body-text">{monthString}</center> : null}
              {day}
            </span>
          );
        })}
      </>
    );
  }
}

export default MonthDays;