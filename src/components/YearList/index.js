import React, { Component } from 'react';
import styled from 'styled-components';
import { color } from "styled-system";
import './YearList.css';

const YearWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 250px;  
  overflow-y: scroll;
  scroll-behavior: smooth;
  border-radius: 5px;
  z-index: 1;
  box-shadow: 0 4px 2px 0 #bababa;
  ${color}
`;

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
    const yearRange = 200;

    return (
      <YearWrapper bg="tertiary">
        {[...new Array(yearRange)].map((val, index) => {
          const addYear = (currentYear - Math.floor(yearRange/2)) + index;
          const isActiveYear = (addYear === currentYear);

          return (<p key={addYear} id={addYear} className={`add-year ${isActiveYear ? 'active' : ''}`} onClick={() => this.selectYear(addYear)}>{addYear}</p>);
        })}
      </YearWrapper>
    );
  }
}

export default YearList;