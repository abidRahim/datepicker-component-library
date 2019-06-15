import React, { Component } from 'react';
import { CALENDAR_MONTHS } from '../../helpers/calendarMethod';
import './MonthList.css';

class MonthList extends Component {
  closeMonthList = () => {
    // this.props.toggleMonthList(true);
  }
  render() {    
    return(
      <div className="month-select" onClick={this.closeMonthList}>
        {Object.keys(CALENDAR_MONTHS).map((month) => (
            <div key={month} className="header-month">
              {CALENDAR_MONTHS[month]}
            </div>
          )
        )}
      </div>
    )
  }
}

export default MonthList;
