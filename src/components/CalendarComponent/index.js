import React from 'react';
import CalendarHeader from '../CalendarHeader';
import Calendar from '../Calendar';
import TodaySelect from '../TodaySelect';

function CalendarComponent(props) {
  const { onDateChange, current } = props;
  return (
    <React.Fragment>
      <CalendarHeader current={current} onDateChange={onDateChange} />
      <Calendar />
      <TodaySelect onDateChange={onDateChange} />
    </React.Fragment>
  );
}

export default CalendarComponent;