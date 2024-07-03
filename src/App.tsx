import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from "react";
import Form from "./components/form";
import ListPage from "./pages/listing";
import Landing from "./pages/landing";

function App() {
  const [userInput, setInput] = useState({
    starting_location: "",
    ending_location: "",
    duration: 0,
    budget: 0
  });

  return (
    //you can only put your code inside the one div within any return you have and you can have multiple class names
    // Leisure Voyage Travel --> LVTravel
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/list" element={<ListPage search={[]} />}></Route> */}
          <Route path="/" element={<Landing></Landing>}></Route>
          <Route path="/form" element={<Form value={setInput} />}></Route>
          <Route path="/list" element={<ListPage value={userInput} />}></Route>
        </Routes>
      </div>
    </Router>
      /* <header className="App-header">
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
      </header> */
  );
  console.log(userInput);
}

export default App;
