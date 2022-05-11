function WeatherDisplay(props) {

    // Display weather information

    const {city, weatherData} = props;
    if (weatherData !== null && weatherData !== undefined && city === weatherData.name) {
        console.log(weatherData);
        //
        return (<p>Just checking !!!</p>);
    } else {
        return null;
    }
}

export default WeatherDisplay;