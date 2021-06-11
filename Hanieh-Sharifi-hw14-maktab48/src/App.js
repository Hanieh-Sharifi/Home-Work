import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import ThemeContext from "./Context/ThemeContext";

function App() {
  return (
    <ThemeContext.Provider>
      <div className="App">
        <Header/>
        <Body/>
        <Footer/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
