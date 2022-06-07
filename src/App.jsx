import './App.scss';

import team from './data/employees';

import EmployeeTile from "./components/EmployeeTile/EmployeeTile";


console.log(team);

function App() {
  return (
    <div className="App">
      <h1>Gavin's Ticket Tracker</h1>
      <EmployeeTile />
    </div>
  );
}

export default App;
