import React, { Component } from 'react';
import { zeroPad, CALENDAR_MONTHS, getOrdinal } from '../../util/calendarMethod';
import './InputComponent.css';

class InputComponent extends Component {
  state = {
    format: '',
    date: '',
  }

  componentDidMount = () => {
    const { current } = this.props;
    const currentFullYear = current.getFullYear();
    const currentMonth = zeroPad(current.getMonth() + 1, 2);    
    const day = zeroPad(current.getDate(), 2);
    let date = [day, currentMonth, currentFullYear].join(" / ");

    this.setState({
      date
    });    
  }

  selectFormat = (e) => {
    const format = e.target.value || '';
    const { current } = this.props;
    const currentFullYear = current.getFullYear();
    const currentYearSlice = String(currentFullYear).slice(-2);    
    const currentMonth = zeroPad(current.getMonth() + 1, 2);
    const currentStringMonth = CALENDAR_MONTHS[Object.keys(CALENDAR_MONTHS)[current.getMonth()]];
    const day = zeroPad(current.getDate(), 2);
    const currentOrdinal = getOrdinal(day);
    let date = null;

    switch(format) {
      case "dd-mm-yyyy" :
        date = [day, currentMonth, currentFullYear].join(" - ");
        break;
      case "mm-dd-yyyy" :
        date = [currentMonth, day, currentFullYear].join(" - ");
        break;
      case "dd-mm-yy" :
        date = [day, currentMonth, currentYearSlice].join(" - ");
        break;
      case "mm-dd-yy" :
        date = [currentMonth, day, currentYearSlice].join(" - ");
        break;
      case "strings" :
        date = `${day}${currentOrdinal} ${currentStringMonth}, ${currentFullYear}`;
        break;
      default:
        date = [day, currentMonth, currentFullYear].join(" / ");
        break;
    }

    this.setState({
      date
    });
  }



  render() {
    const { date } = this.state;
    const { current } = this.props;
    return (
      <div className="input-container">
        <input className="date-text" type="text" value={date}/>
        <select className="format-select" name="format-select" onChange={this.selectFormat}>
          <option value="select">Select Format</option>
          <option value="dd/mm/yyyy">dd / mm / yyyy</option>
          <option value="dd-mm-yyyy">dd - mm - yyyy</option>
          <option value="mm-dd-yyyy">mm - dd - yyyy</option>          
          <option value="dd-mm-yy">dd - mm - yy</option>
          <option value="mm-dd-yy">mm - dd - yy</option>
          <option value="strings">1st Jan, 1970</option>
        </select>
      </div>
    );
  }
}

export default InputComponent;