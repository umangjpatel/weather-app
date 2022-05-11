function WeatherDisplay(props) {
    const {city, locationData} = props;
    if (locationData !== null && locationData !== undefined && city === locationData.name) {
        console.log(locationData);
        return (<p>Just checking !!!</p>);
    } else {
        return null;
    }
}

export default WeatherDisplay;