import React, { Component } from 'react';
import { CALENDAR_MONTHS } from '../../helpers/calendarMethod';
import './MonthList.css';

class MonthList extends Component {
  selectMonth = (month) => {
    const { current, onDateChange, toggleMonthList } = this.props;
    const monthYear = current.getFullYear();
    const day = current.getDate();
    const setDate = new Date(monthYear, month, day);
    onDateChange(setDate);
    toggleMonthList(false);
  }

  render() {
    const { current } = this.props;
    const currentMonth = current.getMonth();
    return (
      <div className="month-select" onClick={this.closeMonthList}>
        {Object.keys(CALENDAR_MONTHS).map((month, index) => {
          const isCurrentMonth = index === currentMonth;
          return (
            <div key={month} className={`header-month ${isCurrentMonth? 'active-month' : ''}`} onClick={() => this.selectMonth(index)}>
              {CALENDAR_MONTHS[month]}
            </div>
          );
        })}
      </div>
    )
  }
}

export default MonthList;
