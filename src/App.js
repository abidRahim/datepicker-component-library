import React, { Component } from 'react';
import InputComponent from './components/InputComponent';
import CalendarComponent from './components/CalendarComponent';
import styled, { ThemeProvider } from 'styled-components';
import { space, layout, color, position } from "styled-system";
import { theme } from './theme';
import './App.css';

export const CalendarContext = React.createContext(null);
const AppWrapper = styled.div`
  ${space}
  ${layout}
  ${color}
  `;
  const Button = styled.button`
  ${position}
  ${color}
`;

class App extends Component {
  state = {
    current: new Date(),
    showCalendar: false,
    darkMode: false,
  }

  componentDidMount = () => {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  onDateChange = (current) => {
    this.setState({
      current,
    })
  }

  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      return;
    }

    this.showCalendarComponent(false);
  }

  showCalendarComponent = (showCalendar) => {    
    this.setState({
      showCalendar,
    })
  }
  handleMode = () => {
    this.setState({
      darkMode: !this.state.darkMode,
    })
  }

  render() {
    const { current, showCalendar, darkMode} = this.state;
    const themeName = darkMode ? 'Dark' : 'Light';
    const modeTheme = darkMode ? Object.assign({}, theme, {colors: theme.colors.modes[themeName]}) : theme;

    return (
      <ThemeProvider theme={modeTheme}>
        <CalendarContext.Provider value={{
          state: this.state,
          onDateChange: this.onDateChange
        }}>
          <AppWrapper m="3em auto 0" width="400px" bg="background" ref={node => this.node = node} onClick={() => this.showCalendarComponent(true)}>
            <Button position="absolute" top="50px" right="50px" bg="primary" className="mode-button" onClick={this.handleMode}>{themeName}</Button>
            <InputComponent current={current} />
            { showCalendar ?
              <CalendarComponent current={current} onDateChange={this.onDateChange}/> : ''
            }
          </AppWrapper>
        </CalendarContext.Provider>
      </ThemeProvider>
    );
  }
}

export default App;
