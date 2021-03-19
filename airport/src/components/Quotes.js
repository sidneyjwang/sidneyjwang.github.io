import React from 'react';
import './Quotes.css';

function Quotes(props) { 

    return(
        <div className="quotes">
            <table>
                <thead>
                    <tr>
                        <th>Quote ID</th>
                        <th>Min Price</th>
                        <th>Outbound Leg Carrier IDs</th>
                        <th>Origin ID</th>
                        <th>Destination ID</th>
                    </tr>
                </thead>
                <tbody>
                    {props.quotes.map(quotes => {
                        return (<tr id={quotes.QuoteId}>
                            <th>{quotes.QuoteId}</th>
                            <th>{quotes.MinPrice}</th>
                            <th>{quotes.OutboundLeg.CarrierIds}</th>
                            <th>{quotes.OutboundLeg.OriginId}</th>
                            <th>{quotes.OutboundLeg.DestinationId}</th>
                        </tr>);
                    })}
                </tbody>
            </table>
         </div>
    )
}

export default Quotes;