import React,{useContext, useEffect, useState} from 'react'; 
import SelectedItemContext from '../Contexts/SelectedItemContext';

function Detail() {

    const {selectedItem} = useContext(SelectedItemContext);
    const [weatherData, setWeatherData] = useState({});
    const [weather, setweather] = useState({});
    const [wind, setWind] = useState({});
    const [main, setMain] = useState({});
    const [coord, setCoord] = useState({});

    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectedItem.name}&appid=15ef81c63f2b1a6d70940008e3256cdb`)
        .then(response => response.json())
        .then(data => {setWeatherData(data);setweather(data.weather[0]);setWind(data.wind);setMain(data.main);setCoord(data.coor)})  
        // .then(data => setweather(data.weather[0]))
        .catch(error => console.log(error))
    },[])


    return (
        <div>
            <div>
                <div>
                    <img style={{objectFit:"fill",width:"200px"}} src={selectedItem.flag}/>
                </div>
                <div>
                    <p>{selectedItem.name}</p>
                    <p>{selectedItem.nativeName}</p>
                    <p>{selectedItem.capital}</p>
                    <p>{selectedItem.region}</p>
                    <p>{selectedItem.population}</p>
                    <p>{selectedItem.languages[0].nativeName}</p>
                    <p>{selectedItem.timezones}</p>
                </div>
            </div>
            <div>
                <div>
                    <h1>Weather Report</h1>
                    {weather && <img alt="icon" src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}/>}
                    <p>{weather.description}</p>
                    <p>{wind.speed}</p>
                    <p>{main.temp}</p>
                    <p>{main.humidity}</p>
                    <p>{weatherData.visibility}</p>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default Detail
