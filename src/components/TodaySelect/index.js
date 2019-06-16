import React, { Component } from 'react';
import './TodaySelect.css';

class TodaySelect extends Component {
  render() {
    const { onDateChange } = this.props;
    return(
      <div className="today-container" onClick={() => onDateChange(new Date())}>
        <p>Today</p>
      </div>
    )
  }
}

export default TodaySelect;