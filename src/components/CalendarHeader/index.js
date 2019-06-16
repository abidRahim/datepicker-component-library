import React, { Component } from 'react';
import { WEEKDAYS, CALENDAR_MONTHS, getOrdinal, getPreviousMonth, getNextMonth } from '../../util/calendarMethod';
import './CalendarHeader.css';
import MonthList from '../MonthList';
import YearList from '../YearList';

class CalendarHeader extends Component {  
  constructor() {
    super();
    this.toggleMonthList = this.toggleMonthList.bind(this);
    this.toggleYearList = this.toggleYearList.bind(this);
  }
  state = {
    showMonthList: false,
    showYearList: false,
  }

  componentDidMount = () => {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      return;
    }
    
    this.toggleYearList(false);
    this.toggleMonthList(false);
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
    const currentOrdinal =  getOrdinal(date);

    return (
      <div className="header-wrapper">
        <div className="angle" onClick={this.showPrevMonth}>
          <i className="fa fa-angle-left fa-2x" aria-hidden="true"></i>
        </div>
        <div className="calendar-header" ref={node => this.node = node}>
          <div className="year-container">
            {showYearList ? 
              <YearList current={current} onDateChange={onDateChange} toggleYearList={this.toggleYearList} /> :
              <a href={`#${year}`}><p className="header-year text-boxing" onClick={this.toggleYearList}>{year}</p></a>
            }
          </div>
          <div className="month-container">
            {showMonthList ?
              <MonthList current={current} onDateChange={onDateChange} toggleMonthList={this.toggleMonthList} /> :
              <p className="header-date text-boxing" onClick={this.toggleMonthList} >{day}, {month} {date}{currentOrdinal}</p>
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