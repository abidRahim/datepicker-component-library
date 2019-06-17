import React, { Component } from 'react';
import styled from 'styled-components';
import { color } from "styled-system";
import './TodaySelect.css';

const TodayWrapper = styled.div`  
  text-align: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;  
  cursor: pointer;
  padding: 0.6em;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  ${color}
`

class TodaySelect extends Component {
  render() {
    const { onDateChange } = this.props;
    return(
      <TodayWrapper bg="today" onClick={() => onDateChange(new Date())}>
        <p className="today-text">Today</p>
      </TodayWrapper>
    )
  }
}

export default TodaySelect;