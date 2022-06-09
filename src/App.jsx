// App styling
import './App.scss';

// Importing data to be used
import team from './data/employees';

// Importing components
import Grid from './components/Grid/Grid';


// Import React and useState
import React, { useState } from 'react';

function App() {
  const [employees, setEmployees] = useState([...team]);

  return (
    <div className="App">
      <h1>Gavin's Ticket Tracker</h1>
      <Grid className="grid__employees" arr={employees} addEmployee={setEmployees} />
    </div>
  );
}

export default App;
