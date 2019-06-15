import React, { Component } from 'react';
import { WEEKDAYS, CALENDAR_MONTHS } from '../../helpers/calendarMethod';
import './CalendarHeader.css';
import MonthList from '../MonthList';

class CalendarHeader extends Component {
  state = {
    showMonthList: false,
  }

  toggleMonthList = (showMonthList) => {
    this.setState({
      showMonthList,
    })
  }

  render() {
    const { current } = this.props;
    const { showMonthList } = this.state;
    const year = current.getFullYear();
    const day = WEEKDAYS[Object.keys(WEEKDAYS)[current.getDay()]];
    const month = CALENDAR_MONTHS[Object.keys(CALENDAR_MONTHS)[current.getMonth()]]
    const date = current.getDate();

    return (
      <div className="header-wrapper">
        <div className="calendar-header">        
          <p className="header-year text-boxing">{year}</p>
          {showMonthList ? <MonthList /> :
            <p className="header-date text-boxing" onClick={this.toggleMonthList} toggleMonthList={this.toggleMonthList} >{day}, {month} {date}</p>
          }
        </div>
      </div>
    );
  }
}

export default CalendarHeader;