import logo from './logo.svg';
import './App.css';

function Message(props) {
  return <p className="Message"> Message - {props.text}</p>
}

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello World
        </p>
      </header>
      <Message text={"This is my message!"} />
    </div>
  );
}

export default App;
