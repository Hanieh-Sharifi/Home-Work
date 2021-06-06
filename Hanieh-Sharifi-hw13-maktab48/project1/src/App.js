import React, { useEffect, useState } from 'react';
import './App.css';
import LanguageContext from "./Contexts/LanguageContext";
import ThemeContext from "./Contexts/ThemeContext";
import MainData from "./Contexts/MainData";
import BodyDisplay from "./Contexts/BodyDisplay";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";


function App ()
{

    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [toggleBodyDisplay, setToggleBodyDisplay] = useState(false);
    const [theme, setTheme] = useState("light");
    const [language, setLanguage] = useState("en");

    useEffect(()=>{
        fetch("https://restcountries.eu/rest/v2/")
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.log("you got an error"))
    },[])

    return(
        <div className={`${theme==="light" ? "" : "App"}`} style={{}}>
            <LanguageContext.Provider value={{language,setLanguage}}>
                <ThemeContext.Provider value={{theme,setTheme}}>
                    <MainData.Provider value={{data,setData,inputValue,setInputValue}}>
                        <BodyDisplay.Provider value={{toggleBodyDisplay,setToggleBodyDisplay}}>
                            <Header/>
                            <Body/>
                            <Footer/>
                        </BodyDisplay.Provider>
                    </MainData.Provider>
                </ThemeContext.Provider>
            </LanguageContext.Provider>
        </div>
    )
}

export default App;
