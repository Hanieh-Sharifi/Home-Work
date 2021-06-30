import React, { useState } from 'react';
import './App.css';
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import ThemeContext from "./Context/ThemeContext";
import {BrowserRouter as Router} from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';



function App() {
  const [lightThemeState, setLightThemeState] = useState(true);
  const theme = createMuiTheme({
    palette: {
      type: lightThemeState ? "light" : "dark",
    },
  });

  return (
    <ThemeContext.Provider value={{lightThemeState, setLightThemeState}}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Header/>
            <Body/>
          </Router>
          <Footer/>
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
