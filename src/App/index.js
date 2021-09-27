import React from 'react';
import CalendarTable from '../CalendarTable/';
import { DateTime } from 'luxon';
  
const App = () => {

  const today = DateTime.now();

  return (
    <CalendarTable today={today}/>
  );
}

export default App;