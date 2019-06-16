import React, { Component } from 'react';
import { WEEKDAYS, CALENDAR_MONTHS, getPreviousMonth, getNextMonth } from '../../util/calendarMethod';
import './CalendarHeader.css';
import MonthList from '../MonthList';
import YearList from '../YearList';

class CalendarHeader extends Component {
  state = {
    showMonthList: false,
    showYearList: false,
  }

  toggleMonthList = (showMonthList) => {
    this.setState({
      showMonthList,
    });
  }

  toggleYearList = (showYearList) => {
    this.setState({
      showYearList,
    });
  }

  showPrevMonth = () => {    
    const { onDateChange, current } = this.props;
    const year = current.getFullYear();
    const month = current.getMonth();
    const day = current.getDate();

    const {prevMonth, prevMonthYear} = getPreviousMonth(month, year);   
    const prevDate = new Date(prevMonthYear, prevMonth, day);
    onDateChange(prevDate);
  }

  showNextMonth = () => {
    const { onDateChange, current } = this.props;    
    const year = current.getFullYear();
    const month = current.getMonth();
    const day = current.getDate();

    const {nextMonth, nextMonthYear} = getNextMonth(month, year);    
    const nextDate = new Date(nextMonthYear, nextMonth, day);
    onDateChange(nextDate);
  }

  render() {
    const { current, onDateChange } = this.props;
    const { showMonthList, showYearList } = this.state;
    const year = current.getFullYear();
    const day = WEEKDAYS[Object.keys(WEEKDAYS)[current.getDay()]];
    const month = CALENDAR_MONTHS[Object.keys(CALENDAR_MONTHS)[current.getMonth()]]
    const date = current.getDate();

    return (
      <div className="header-wrapper">
        <div className="angle" onClick={this.showPrevMonth}>
          <i className="fa fa-angle-left fa-2x" aria-hidden="true"></i>
        </div>
        <div className="calendar-header">
          <div className="year-container">
            {showYearList ? 
              <YearList current={current} onDateChange={onDateChange} toggleYearList={this.toggleYearList} /> :
              <p className="header-year text-boxing" onClick={this.toggleYearList}>{year}</p>
            }
          </div>
          <div className="month-container">
            {showMonthList ?
              <MonthList current={current} onDateChange={onDateChange} toggleMonthList={this.toggleMonthList} /> :
              <p className="header-date text-boxing" onClick={this.toggleMonthList} >{day}, {month} {date}</p>
            }
          </div>
        </div>
        <div className="angle" onClick={this.showNextMonth}>
          <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default CalendarHeader;