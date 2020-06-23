import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes />
      </div>
    </BrowserRouter>
  );
};

export default App;
