// import logo from './logo.svg';
import './App.css';
// import TodoList from './Components/ToDo/ToDo';
import ToDo from './Components/ToDo/ToDo'

function App() {
  return (
    <div className="background-container">
      <div className="background-animation">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <ToDo />
        </header>
      </div>
    </div>
  );
}

export default App;
