import React, { Component } from 'react';
import styled from 'styled-components';
import { space, layout, color, flexbox } from "styled-system";
import { WEEKDAYS, CALENDAR_MONTHS, getOrdinal, getPreviousMonth, getNextMonth } from '../../util/calendarMethod';
import MonthList from '../MonthList';
import YearList from '../YearList';
import './CalendarHeader.css';

const CalendarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgb(68, 138, 255);
  color: #fff;
  padding: 1em 0;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  ${flexbox}
  ${color}
  ${layout}
  ${space}
`;

const Angle = styled.div`
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14%;
  cursor: pointer;
  border-radius: 5px;
  
  &:hover {  
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const TextBoxing = `
  cursor: pointer;
  padding: 0.1rem 0.3rem;
  border-radius: 5px;
  text-align: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const Year = styled.div`
  font-size: 1.3rem;
  color: hsla(0,0%,100%,.5);

  ${TextBoxing}
`;

const MonthDate = styled.div`
  color: inherit;
  font-size: 2.2rem;

  ${TextBoxing}
`


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
      <CalendarWrapper bg="secondary" color="primary">
        <Angle onClick={this.showPrevMonth}>
          <i className="fa fa-angle-left fa-2x" aria-hidden="true"></i>
        </Angle>
        <div className="calendar-header" ref={node => this.node = node}>
          <div className="year-container">
            {showYearList ? 
              <YearList current={current} onDateChange={onDateChange} toggleYearList={this.toggleYearList} /> :
              <a href={`#${year}`}><Year onClick={this.toggleYearList}>{year}</Year></a>
            }
          </div>
          <div className="month-container">
            {showMonthList ?
              <MonthList current={current} onDateChange={onDateChange} toggleMonthList={this.toggleMonthList} /> :
              <MonthDate onClick={this.toggleMonthList} >{day}, {month} {date}{currentOrdinal}</MonthDate>
            }
          </div>
        </div>
        <Angle className="angle" onClick={this.showNextMonth}>
          <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
        </Angle>
      </CalendarWrapper>
    );
  }
}

export default CalendarHeader;