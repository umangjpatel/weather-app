import './App.css';
import {useState} from "react";
import CitySearch from "./search/CitySearch";
import WeatherDisplay from "./display/WeatherDisplay";

function App() {
    const [city, updateCity] = useState("");
    const [weatherData, updateWeatherData] = useState();

    const fetchLocation = async (e) => {
        e.preventDefault();
        if (city !== "") {
            const [response] = await Promise.all([fetch(`${process.env.REACT_APP_GEOCODING_URL}?q=${city}&limit=1&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
                .then(r => {
                    if (r.ok)
                        return r.json();
                    else
                        return new Error("Request failed");
                })
                .then(j => {
                    if (j.length > 0)
                        return j[0];
                    else
                        return new Error("Empty response");
                })
                .then(l => {
                    if (l.name === city)
                        return l;
                    else
                        throw new Error("Location not found");
                })
                .then(l => fetch(`${process.env.REACT_APP_CURRENT_WEATHER_URL}?lat=${l.lat}&lon=${l.lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`))
                .then(r => {
                    if (r.ok) {
                        return r.json();
                    } else
                        return new Error("Request failed")
                })
                .catch(e => console.log(e))]);
            updateWeatherData(response);
        }
    };

    return (
        <div>
            <h1>React Weather App</h1>
            <CitySearch updateCity={updateCity} fetchLocation={fetchLocation}/>
            <WeatherDisplay weatherData={weatherData}/>
        </div>

    );
}

export default App;
