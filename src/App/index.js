import React from 'react';
import Calendar from '../Calendar/';
import { DateTime } from 'luxon';
  
const App = () => {

  const today = DateTime.now();

  return (
    <Calendar today={today}/>
  );
}

export default App;