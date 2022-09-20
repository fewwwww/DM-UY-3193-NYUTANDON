import logo from './logo.svg';
import './App.css';

function App() {
  const v = "cool"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {v}
        </p>
      </header>
    </div>
  );
}

export default App;
