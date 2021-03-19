import React, { useState } from 'react';
import './AirportInfo.css';
import Quotes from './Quotes';

function AirportInfo() { 
    const [quotes,setQuotes] = useState([])
    // const [places,setPlaces] = useState([])
    const [inputQuery,setInputQuery] = useState("")
    const [destQuery, setDestQuery] = useState("")
    const [showQuotes,setShowQuotes] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        async function fetchMyAPI() {
            const reqOptions = {
                method: 'GET',
                headers: {
                    "x-rapidapi-key": "d5df66e262msh0ee4ae21cf5eab8p14a4dcjsn5895e2e3c26f",
                    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                    "useQueryString": true
                }
            }
            let originInput = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?" + new URLSearchParams({query: inputQuery}), reqOptions)
            originInput = await originInput.json()
            let originResponse = originInput.Places[0].PlaceId
            if (originResponse.length !== 7) return
            let destinationInput = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?" + new URLSearchParams({query: destQuery}), reqOptions)
            destinationInput = await destinationInput.json()
            let destinationResponse = destinationInput.Places[0].PlaceId
            console.log(destinationResponse)
            if (destinationResponse.length !== 7) return
            let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/USD/en-US/" + originResponse + "/" + destinationResponse + "/2021-03-19", reqOptions) //+ new URLSearchParams({inputQuery: inputQuery}), reqOptions)
            response = await response.json()
            setQuotes(response.Quotes)
            // setPlaces(response.Places)
        }
        fetchMyAPI()
        setShowQuotes(true)
        // setInputQuery("")
    }

    return(
        <div className="airportinfo">
           <form onSubmit={handleSubmit}>
                <label htmlFor="originInput">City of Origin:</label>
                <input id="originInput" value={inputQuery} onChange={e => setInputQuery(e.target.value)} required/>
                <label htmlFor="destinationInput">City Destination:</label>
                <input id="destinationInput" value={destQuery} onChange={e => setDestQuery(e.target.value)} required/>
                <button className="search">Submit</button>
           </form>
           { showQuotes ? <Quotes quotes={quotes}></Quotes> : <></>}
           {/* { showPlaces ? <Places places={places}></Places> : <></>} */}
        </div>
    )
}
export default AirportInfo;