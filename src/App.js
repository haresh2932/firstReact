import logo from './logo.svg';
import './App.css';
import Car from "./components/Car"
import Phone from "./components/Phone"
import Student from "./components/Student"
import Result from "./components/Result"



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Clone git

        </a>
        <Car></Car>
        <Phone></Phone>
        <Student></Student>
        <Result></Result>
      </header>
    </div>
  );
}

export default App;
