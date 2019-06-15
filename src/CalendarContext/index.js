import React from 'react';

export const state = {
  current: new Date(),
  today: new Date(),
}

export const CalendarContext = React.createContext(state);