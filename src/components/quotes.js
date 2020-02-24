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
            console.log(data.value)
        })
    }

    return(
       <div>
            <div>
                <p>{tronald}</p>
            </div>
            <div>
                <button onClick={fetchData}>Get a Quote</button>
            </div>
       </div>
    )
}

export default Quote;