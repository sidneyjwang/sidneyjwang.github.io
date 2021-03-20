import React, { useState } from 'react';
import './AirportInfo.css';
import Quotes from './Quotes';

function AirportInfo() { 
    const [quotes,setQuotes] = useState([])
    const [places, setPlaces] = useState([])
    const [airports, setAirports] = useState([])
    const [dates, setDates] = useState([])
    const [currency, setCurrency] = useState([])
    const [inputQuery,setInputQuery] = useState("")
    const [destQuery, setDestQuery] = useState("")
    const [goQuery, setGoQuery] = useState("")
    const [leaveQuery, setLeaveQuery] = useState("")
    const [currencyQuery, setCurrencyQuery] = useState("")
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
            let originInput = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/" + currencyQuery + "/en-US/?" + new URLSearchParams({query: inputQuery}), reqOptions)
            originInput = await originInput.json()
            let originResponse = originInput.Places[0].PlaceId
            let destinationInput = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/" + currencyQuery + "/en-US/?" + new URLSearchParams({query: destQuery}), reqOptions)
            destinationInput = await destinationInput.json()
            let destinationResponse = destinationInput.Places[0].PlaceId
            let returnDate = ""
            if (leaveQuery !== "") returnDate = "?inboundpartialdate=" + leaveQuery
            let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/" + currencyQuery + "/en-US/" + originResponse + "/" + destinationResponse + "/" + goQuery + returnDate, reqOptions)
            response = await response.json()
            setQuotes(response.Quotes)
            setPlaces(response.Places)
            setAirports(response.Carriers)
            setDates(response.Dates)
            setCurrency(currencyQuery)
        }
        fetchMyAPI()
        setShowQuotes(true)
    }

    return(
        <div className="airportinfo">
           <form onSubmit={handleSubmit}>
                <label htmlFor="originInput">City of Origin Code:</label>
                <input id="originInput" value={inputQuery} onChange={e => setInputQuery(e.target.value)} required/>
                <label htmlFor="destinationInput">City Destination Code:</label>
                <input id="destinationInput" value={destQuery} onChange={e => setDestQuery(e.target.value)} required/>
                <label htmlFor="goDate">Leaving date (yyyy-mm-dd or yyyy-mm):</label>
                <input id="goDate" value = {goQuery} onChange={e => setGoQuery(e.target.value)} required/>
                <label htmlFor="leaveDate">Return date: (blank for one-way)</label>
                <input id="leaveDate" value = {leaveQuery} onChange={e => setLeaveQuery(e.target.value)}/>
                <label htmlFor="currency">Currency Code:</label>
                <input id="currency" value = {currencyQuery} onChange={e => setCurrencyQuery(e.target.value)} required/>
                <button className="search">Submit</button>
           </form>
           { showQuotes ? <Quotes quotes={quotes} places={places} airports={airports} dates={dates} currency={currency}></Quotes>: <></>}
        </div>
    )
}
export default AirportInfo;