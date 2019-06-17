import React, { Component } from 'react';
import WeekDays from '../WeekDays';
import MonthDays from '../MonthDays';
import { CalendarContext } from '../../App';
import styled from 'styled-components';
import { color } from "styled-system";
import './Calendar.css';

const CalendarWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 5px;
  justify-items: center;
  padding: 0.15em 0;
  color: rgb(180, 180, 180);
  ${color}
`;

class Calendar extends Component {
  render() {
    return (
      <>
        <WeekDays />
        <CalendarContext.Consumer>
        {({state, onDateChange}) => {
          return (
            <CalendarWrapper color="gray" bg="primary">
              <MonthDays current={state.current} onDateChange={onDateChange}/>
            </CalendarWrapper>
          )
        }}
        </CalendarContext.Consumer>
      </>
    );
  }
}

export default Calendar;