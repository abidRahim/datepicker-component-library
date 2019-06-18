import React, { Component } from 'react';
import { zeroPad, CALENDAR_MONTHS, getOrdinal } from '../../util/calendarMethod';
import styled from 'styled-components';
import { space, color, border } from "styled-system";

const FlexWrapper = styled.div`
  display: flex;
`;
const Input = styled.input`
  flex: 2;
  font-size: 1rem;
  padding: 0.6em;
  color: rgb(100, 100, 100);
  font-weight: 700;
  text-align: center;  
  border: 2px solid rgb(219, 219, 219);
  transition: border 0.18s ease-in;
  
  ${color}
  ${space}
  ${border}

  &:focus {
    outline: none;
    border-color: rgb(85, 159, 255);
  }
`;
const Select = styled.select`
  flex: 1;
  padding: 5px;  
  border: 2px solid rgb(219, 219, 219);
  color: rgb(100, 100, 100);
	font-size: 1.08rem;

  &:focus {
    outline: none;
  }

`

class InputComponent extends Component {
  state = {
    format: '',
    date: '',
  }

  componentDidMount = () => {
    const { current } = this.props;
    this.setCurrentDate(current);
  }

  componentDidUpdate = (prevProps, prevState) => {    
    const { current } = this.props;
    const { format } = this.state;

    if (prevProps.current !== current) {
      this.setCurrentDate(current, format);
    }
  }

  setCurrentDate = (current, format = '') => {
    const currentFullYear = current.getFullYear();
    const currentYearSlice = String(currentFullYear).slice(-2);    
    const currentMonth = zeroPad(current.getMonth() + 1, 2);    
    const currentStringMonth = CALENDAR_MONTHS[Object.keys(CALENDAR_MONTHS)[current.getMonth()]];
    const day = zeroPad(current.getDate(), 2);
    const currentOrdinal = getOrdinal(+day);

    console.log(day, currentOrdinal);

    let date = null;

    switch(format) {
      case "dd/mm/yyyy" :
        date = [day, currentMonth, currentFullYear].join(" / ");
        break;
      case "mm/dd/yyyy" :
        date = [currentMonth, day, currentFullYear].join(" / ");
        break;
      case "yyyy/mm/dd" :
        date = [currentFullYear, currentMonth, day].join(" / ");
        break;
      case "dd/mm/yy" :
        date = [day, currentMonth, currentYearSlice].join(" / ");
        break;
      case "mm/dd/yy" :
        date = [currentMonth, day, currentYearSlice].join(" / ");
        break;
      case "strings" :
        date = `${day}${currentOrdinal} ${currentStringMonth}, ${currentFullYear}`;
        break;
      default:
        date = [day, currentMonth, currentFullYear].join(" / ");
        break;
    }

    this.setState({
      date,
      format,
    });
  }

  selectFormat = (e) => {
    const format = e.target.value || '';
    const { current } = this.props;
    
    this.setCurrentDate(current, format);    
  }



  render() {
    const { date } = this.state;    

    return (
      <FlexWrapper flex="flex">
        <Input type="text" bg="primary" value={date} onChange={() => {}}/>
        <Select name="format-select" onChange={this.selectFormat}>
          <option value="select">Select Format</option>
          <option value="dd/mm/yyyy">dd / mm / yyyy</option>
          <option value="mm/dd/yyyy">mm / dd / yyyy</option>
          <option value="yyyy/mm/dd">mm / dd / yyyy</option>
          <option value="dd/mm/yy">dd / mm / yy</option>
          <option value="mm/dd/yy">mm / dd / yy</option>
          <option value="strings">1st Jan, 1970</option>
        </Select>
      </FlexWrapper>
    );
  }
}

export default InputComponent;
