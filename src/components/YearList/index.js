import React, { Component } from 'react';
import './YearList.css';
class YearList extends Component {
  selectYear = (year) => {
    const { current, onDateChange, toggleYearList } = this.props;
    const month = current.getMonth();
    const day = current.getDate();
    const setDate = new Date(year, month, day);
    onDateChange(setDate);
    toggleYearList(false);
  }

  render() {
    const { current } = this.props;
    const currentYear = current.getFullYear();
    const yearRange = 75;

    return (
      <div className="year-list">
        {[...new Array(yearRange)].map((val, index) => {
          const addYear = (currentYear - Math.floor(yearRange/2)) + index;
          const isActiveYear = (addYear === currentYear);          

          return (<p key={addYear} className={`add-year ${isActiveYear ? 'active' : ''}`} onClick={() => this.selectYear(addYear)}>{addYear}</p>);
        })}
      </div>
    );
  }
}

export default YearList;