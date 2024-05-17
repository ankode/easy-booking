import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import HomePage from './pages/HomePage';

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

  return (
    
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;