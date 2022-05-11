function CitySearch(props) {
    const {updateCity, fetchLocation} = props

    return (
        <form onSubmit={fetchLocation}>
            <input
                onChange={e => updateCity(e.target.value.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()))}
                placeholder="Enter city"/>
            <button>Search</button>
        </form>
    );
}

export default CitySearch;

