import React, { useState, useEffect } from "react"

const UseFetch = (url) => {
    //This custom hook will fetch data from the url passed as an argument
    const [data, setData] = useState(); //data is stored in the state data, we use setData to update the state
    useEffect(() => {
        fetch(url) //fetch request is made to the url passed as an argument
            .then((response) => response.json()) //The response is converted to json
            .then((data) => setData(data)) //The data fetched is stored in the state data
    },[]) //The empty array as the second argument of useEffect ensures that the fetch request is only made once when the component mounts
    return [data]; //The data fetched is returned
}

export default UseFetch

//This concludes the custom hook UseFetch.
//We will now use this custom hook in the FetchData component to fetch data from the API.