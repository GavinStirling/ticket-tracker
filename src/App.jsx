// App styling
import './App.scss';

// Importing data to be used
import team from './data/employees';

// Importing components
import Grid from './components/Grid/Grid';
import NewEmployee from './components/NewEmployee/NewEmployee';

function App() {
  return (
    <div className="App">
      <h1>Gavin's Ticket Tracker</h1>
      <NewEmployee arr={team} />
      <Grid className="grid__employees" arr={team} />
    </div>
  );
}

export default App;
