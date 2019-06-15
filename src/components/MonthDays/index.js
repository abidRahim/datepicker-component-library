import React, { Component } from 'react';
import calendarMethod, {
  isDate,
  isSameDay,
  isSameMonth,
  getDateISO,
  getNextMonth,
  getPreviousMonth,
  CALENDAR_MONTHS
} from '../../helpers/calendarMethod';
import './MonthDays.css';

class MonthDays extends Component {
  state = { 
    current: new Date(),
    month: null,
    year: null,
    today: new Date()
  };

  resolveStateFromProp(date) {
    const isDateObject = isDate(date);    
    const _date = isDateObject ? date : new Date();

    this.setState({
      current: isDateObject ? date : null,
      month: +_date.getMonth() + 1,
      year: _date.getFullYear()
    }, () => this.props.onDateChange(this.state.current));
  }

  getCalendarDates = () => {
    const { current, month, year } = this.state;
    const calendarMonth = month || +current.getMonth() + 1;
    const calendarYear = year || current.getFullYear();

    return calendarMethod(calendarMonth, calendarYear);
  };

  setCurrent = (current) => {
    this.setState({
      current,
    });
  }

  render() {    
    const { today, current } = this.state;  
    
    return (
      <>
        {this.getCalendarDates().map((date, index) => {
          const _date = new Date(date.join("-"));
          const [year, month, day] = date;
          const isToday = isSameDay(_date, today);
          const isCurrent = isSameDay(_date, current);
          const monthString = CALENDAR_MONTHS[Object.keys(CALENDAR_MONTHS)[month - 1]];

          return (
            <span key={getDateISO(new Date(year, month, day)) + index} className={`body-date ${isCurrent ? 'active-date' : ''} ${isToday ? 'today-date' : ''}`} onClick={() => this.resolveStateFromProp(_date)}>
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