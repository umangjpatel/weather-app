import './App.css';
import {useState} from "react";
import CitySearch from "./search/CitySearch";
import WeatherDisplay from "./display/WeatherDisplay";

function App() {
    const [city, updateCity] = useState("");
    const [locationData, updateLocationData] = useState();

    const fetchLocation = async (e) => {
        e.preventDefault();
        if (city !== "") {
            const response = await fetch(`${process.env.REACT_APP_GEOCODING_URL}?q=${city}&limit=1&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
                .then(r => r.json())
                .then(j => j.length > 0 ? j[0] : {})
                .then(l => l.name === city ? l : null);
            updateLocationData(response);
        }
    };

    return (
        <div>
          <h1>React Weather App</h1>
          <CitySearch updateCity={updateCity} fetchLocation={fetchLocation}/>
          <WeatherDisplay city={city} locationData={locationData}/>
        </div>

    );
}

export default App;
