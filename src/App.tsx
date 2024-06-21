import React from "react";
import NavBar from "./components/NavBar";
import { useState } from "react";
import Form from "./components/Form";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [userInput, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    //you can only put your code inside the one div within any return you have and you can have multiple class names
    // Leisure Voyage Travel --> LVTravel
    <div className="App">
      <h1 className="text-green-100 flex justify-center">LVTravel</h1>
      <NavBar />
      <Form value={setInput} />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
  console.log(userInput);
}

export default App;
