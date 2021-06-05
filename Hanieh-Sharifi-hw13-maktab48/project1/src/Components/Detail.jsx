import React,{useContext, useEffect, useState} from 'react'; 
import SelectedItemContext from '../Contexts/SelectedItemContext';
import MyMapComponent from "./MyMapComponent";



function Detail() {

    const {selectedItem} = useContext(SelectedItemContext);
    const [weatherData, setWeatherData] = useState({});
    const [weather, setweather] = useState({});
    const [wind, setWind] = useState({});
    const [main, setMain] = useState({});
    const [coord, setCoord] = useState({});

    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectedItem.name==="Iran (Islamic Republic of)"? "Iran": selectedItem.name}&appid=15ef81c63f2b1a6d70940008e3256cdb`)
        .then(response => response.json())
        .then(data => {setWeatherData(data);setweather(data.weather[0]);setWind(data.wind);setMain(data.main);setCoord(data.coord)})
        .catch(error => console.log(error))
    },[])


    return (
        <div className="detail-main-parent">
            <div className="detail-row-one">
                <div className="detail-country-information">
                    <h2>{selectedItem.name}</h2>
                    <p><p>Native Name : </p> &nbsp;{selectedItem.nativeName}</p>
                    <p><p>Capital : </p>&nbsp;{selectedItem.capital}</p>
                    <p><p>Region : </p> &nbsp;{selectedItem.region}</p>
                    <p><p>Population : </p> &nbsp;{selectedItem.population}</p>
                    <p><p>Language : </p> &nbsp;{selectedItem.languages[0].nativeName}</p>
                    <p><p>TimeZone : </p> &nbsp;{selectedItem.timezones}</p>
                </div>
                <div className="detail-flag">
                    <img style={{objectFit:"fill",width:"200px"}} src={selectedItem.flag}/>
                </div>
            </div>
            <div className="detail-row-two">
                <div className="detail-weather-report">
                    <div className="main-part-detail-weather-report">
                        <h2>Capital Weather Report</h2>
                        <div>
                            {weather && <img alt="icon" src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}/>}
                            <p>{weather.description}</p>
                        </div>
                    </div>
                    <div className="explenation-part-detail-weather-report">
                        <p><p>Wind Speed : </p>&nbsp;{wind.speed}&nbsp;&nbsp;<p>M/S</p></p>
                        <p><p>Temprature : </p>&nbsp;{parseInt(main.temp)-273}&nbsp;&nbsp; <p>°C</p></p>
                        <p><p>Humidity : </p>&nbsp;{main.humidity}&nbsp;&nbsp;<p>%</p></p>
                        <p><p>Visibility : </p>&nbsp;{weatherData.visibility}&nbsp;&nbsp;<p>M</p></p>
                    </div>
                </div>
                <div className="google-map">
                    <MyMapComponent
                        center={coord}
                        isMarkerShown
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAEyMI1NdTC--xyLptfoyPLiWG9BQqOmJs"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
            </div>
        </div>
    )
}

export default Detail
