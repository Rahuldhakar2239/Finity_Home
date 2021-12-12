import React from 'react';
import Home from "./Components/Home/home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Components/Navbar/Header";
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <Nav />
          {/* <Route path="/" exact> */}
            <Home />
          {/* </Route> */}
        
      {/* </Router> */}
    </div>
  );
}

export default App;
