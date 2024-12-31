import React from "react";
import UseFetch from "./UseFetch";
import "./FetchData.css";

const FetchData = () => {
    const [data] = useFetch('https://api.npoint.io/4459a9a10e43812e1152') //The custom hook UseFetch is called with the url of the API.
    return (
        <>
            <ul className="list_data_main"> 
                {data && data.map((e) => ( //Data is mapped over if it isn't falsy
                    <li className='list_data'>
                        <h3>{e.name}</h3> 
                        <p><strong>Importance:</strong> {e.importance}</p> 
                        <p><strong>Benefits:</strong> {e.benefits}</p> 
                        <p><strong>Time duration:</strong> {e.time_duration}</p> 
                    </li>
                ))}
            </ul>
        </>
    )
}
export default FetchData;
