import logo from './logo.svg';
import './App.css';

function Message(props) {
  return <p> Message - {props.text}</p>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello World
        </p>
      </header>
      <Message text={"This is my message!"}/>
    </div>
  );
}

export default App;
