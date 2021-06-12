import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import ThemeContext from "./Context/ThemeContext";
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <ThemeContext.Provider>
      <div className="App">
        <Router>
          <Header/>
          <Body/>
        </Router>
        <Footer/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
