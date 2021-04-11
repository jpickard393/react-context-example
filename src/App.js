import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from "./Pages/Index";
import About from "./Pages/About";
import { UserContext } from "./UserContext";

function App() {
  const [value, setValue] = useState('Hello from context');

  // useMemo will only change the value of provideVallue if the value in state changes.
  // this saves processing
  const providerValue = useMemo(() => ({ value, setValue }), [value, setValue]);

  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
            </ul>
          </nav>
          <UserContext.Provider value={providerValue}>
            <Route path="/" exact component={Index} />
            <Route path="/about" exact component={About} />
          </UserContext.Provider>
        </div>
      </Router>
    </div>
  );
}

export default App;
