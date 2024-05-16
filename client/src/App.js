import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

function App() {

  const [message, setMessage] = useState("");
  const [messageAnkush, setMessageAnkush] = useState("");

    // Fetching message from backend on mount
    useEffect(() => {
      fetch("http://localhost:4000")
        .then((res) => {
          console.log("Response:", res); // Print the response
          return res.json();
        })
        .then((data) => {
          console.log("Data:", data); // Print the response
          setMessage(data.message);
          setMessageAnkush(data.messageAnkush);
        });
    }, []);

    
    // Fetching message from backend on mount
    // useEffect(() => {
    //   fetch("http://localhost:4000/")
    //     .then((res) => res.json())
    //     .then((data) => setMessageAnkush(data.messageAnkush));
    // }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <h1>{message}</h1>
      <h1>{messageAnkush}</h1>

    </div>
  );
}

export default App;