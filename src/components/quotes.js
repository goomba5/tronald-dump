import React, { useState} from "react"

const Quote = () => {
    const apiURL = "https://api.tronalddump.io/random/quote";
    const [tronald, setTronald] = useState();

    const fetchData = () => {
        const response = fetch(apiURL);

        response
        .then((response) => {
            return response.json();
        })
        .then((data) =>{
            setTronald(data.value)
        })
    }

    return(
       <div>
            <div className="quoteContainer">
                <h2 className="quote">{tronald}</h2>
            </div>
            <div className="buttonContainer">
                <button className="button" onClick={fetchData}>Send Tweet</button>
            </div>
       </div>
    )
}

export default Quote;