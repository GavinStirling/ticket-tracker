// App styling
import './App.scss';

// Importing data to be used
import team from './data/employees';

// Importing components
import Grid from './components/Grid/Grid';

function App() {
  return (
    <div className="App">
      <Grid className="grid__employees" arr={team} />
    </div>
  );
}

export default App;
