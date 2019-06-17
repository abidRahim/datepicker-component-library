import React, { Component } from 'react';
import { WEEKDAYS } from '../../util/calendarMethod';
import styled from 'styled-components';
import { color } from "styled-system";
import './WeekDays.css';

const FlexWrapper = styled.div`
  display: flex;
`

const Weekday = styled.div`
  flex: 1;
  text-align: center;
  padding: 1.1em 0;  
  color: #fff;
  background-color: rgb(85,159,255);
  ${color}
`
class WeekDays extends Component {
  render() {
    return(
      <FlexWrapper>
        { Object.keys(WEEKDAYS).map((day, i) => {
          return <Weekday bg="tertiary" key={day}>{ WEEKDAYS[day] }</Weekday>
        }) }
      </FlexWrapper>
    );
  }
}

export default WeekDays;