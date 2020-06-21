import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Routes from "./routes";
import "./App.css";
import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <Routes />
      </div>
    </BrowserRouter>
  );
};

export default App;
