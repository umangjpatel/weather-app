function WeatherDisplay(props) {

    // Display weather information

    const weatherData = props.weatherData;
    if (weatherData !== null && weatherData !== undefined) {
        console.log(weatherData);
        return (<div>
            <p>City : {weatherData.name}</p>
            <p>Temperature : {weatherData.main.temp} &deg; C</p>
            <p>Feels like : {weatherData.main.feels_like} &deg; C</p>
            <p>Humidity : {weatherData.main.humidity} %</p>
            <p>Conditions : {weatherData.weather[0].description}</p>
        </div>);
    } else {
        return null;
    }
}

export default WeatherDisplay;