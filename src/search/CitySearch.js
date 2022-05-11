function CitySearch(props) {
    const {updateCity, fetchLocation} = props

    return (
        <form onSubmit={fetchLocation}>
            <input onChange={e => updateCity(e.target.value.replace(/^\w/,
                (c) => c.toUpperCase()))} placeholder="Enter city"/>
            <button>Search</button>
        </form>
    );
}

export default CitySearch;

