import React from 'react';
import './Quotes.css';

function Quotes(props) { 
    var dict = {};
    var dict2 = {};
    var carrierDict = {};
    for (var i = 0; i < props.places.length; i++) {
        dict[props.places[i].PlaceId] = props.places[i].Name
        dict2[props.places[i].PlaceId] = props.places[i].IataCode
    }
    for (var i = 0; i < props.airports.length; i++) {
        carrierDict[props.airports[i].CarrierId] = props.airports[i].Name
    }
    return(
        <div className="quotes">
            <table>
                <thead>
                    <tr>
                        <th>Option #</th>
                        <th>{"Lowest Price (" + props.currency + ")"}</th>
                        <th>Carrier Name</th>
                        <th>Origin</th>
                        <th>Destination</th>
                    </tr>
                </thead>
                <tbody>
                    {props.quotes.map(quotes => {
                        return (<tr id={quotes.QuoteId}>
                            <th>{quotes.QuoteId}</th>
                            <th>{quotes.MinPrice}</th>
                            <th>{carrierDict[quotes.OutboundLeg.CarrierIds]}</th>
                            <th>{dict[quotes.OutboundLeg.OriginId] + " (" + dict2[quotes.OutboundLeg.OriginId] + ")"}</th>
                            <th>{dict[quotes.OutboundLeg.DestinationId] + " (" + dict2[quotes.OutboundLeg.DestinationId] + ")"}</th>
                        </tr>);
                    })}
                </tbody>
            </table>
         </div>
    )
}

export default Quotes;