import React, { Component } from 'react';
import { CalendarContext } from '../../App';
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
  state = { ...this.getStateFromProp(this.props.date), today: new Date(), activeDate: null };

  getStateFromProp(date) {
    const isDateObject = isDate(date);
    const _date = isDateObject ? date : new Date();

    return {
      current: isDateObject ? date : null,
      month: +_date.getMonth() + 1,
      year: _date.getFullYear()
    };
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

  // renderCalendarDate = (date, index) => {
  //   const { current, month, year, today } = this.state;

  //   const _date = new Date(date.join("-"));

  //   const isToday = isSameDay(_date, today);
  //   const isCurrent = current && isSameDay(_date, current);
  //   const inMonth =
  //     month && year && isSameMonth(_date, new Date([year, month, 1].join("-")));

  //   const onClick = this.gotoDate(_date);

  //   const props = { index, inMonth, onClick, title: _date.toDateString() };

  //   return (

  //   );
  // }


  render() {
    const { today } = this.state;
    return (
      <CalendarContext.Consumer>
        {({state, onDateChange}) => {
          return (
            <>
              {this.getCalendarDates().map((date, index) => {
                const _date = new Date(date.join("-"));
                const [year, month, day] = date;
                const isToday = isSameDay(_date, today);
                const isCurrent = isSameDay(_date, state.current);
                const monthString = Object.keys(CALENDAR_MONTHS)[month - 1];

                return (
                  <span key={getDateISO(new Date(year, month, day)) + index} className={`body-date ${isCurrent ? 'active-date' : ''} ${isToday ? 'today-date' : ''}`} onClick={() => onDateChange(_date)}>
                    {isToday ? <center className="active-body-text">{!isCurrent ? 'Today' : ''}</center> : null }
                    {isCurrent ? <center className="active-body-text">{monthString}</center> : null }
                    {day}
                  </span>
                );
              })}
            </>
          );
        }}
      </CalendarContext.Consumer>
      );
    }
  }
  
export default MonthDays;