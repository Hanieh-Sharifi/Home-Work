import React, { useEffect, useState } from 'react';
import './App.css';
import LanguageContext from "./Contexts/LanguageContext";
import ThemeContext from "./Contexts/ThemeContext";
import MainData from "./Contexts/MainData";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";


function App ()
{

    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState("");

    useEffect(()=>{
        fetch("https://restcountries.eu/rest/v2/")
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.log("you got an error"))
    },[])

    return(
        <div className="App">
            <LanguageContext.Provider>
                <ThemeContext.Provider value={"welp"}>
                    <MainData.Provider value={{data,setData,inputValue,setInputValue}}>
                        <Header/>
                        <Body/>
                        <Footer/>
                    </MainData.Provider>
                </ThemeContext.Provider>
            </LanguageContext.Provider>
        </div>
    )
}

export default App;
