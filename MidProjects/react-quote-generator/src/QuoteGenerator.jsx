import React, {useState} from 'react'

//Array for Quotes
const quotes = ["It is not the man who has too little who is poor, but the one who hankers after more. \n- Seneca",
                 "So the man who restrains himself within the bounds set by nature will not notice poverty; the man who exceeds these bounds will be pursued by poverty however rich he. \n - Seneca", 
                 "A Man's life is dyed the color of his imagination. \n- Marcus Aurelius", 
                 "Times relieves the foolish from sorrow, but reason relieves the wise.\n - Epictetus", 
                 "We suffer not from the events in our lives but from our judgement about them.\n - Epictetus",
                 "Hurry up and live.\n - Seneca"]
export default function QuoteGenerator() {

    const [quote, setQuote] = useState("Stoic Quotes")

    function getRandomNumber() {
        return Math.floor(Math.random() * quotes.length)
    }

    let random = getRandomNumber()
    function quoteChange() {
        let previous = random
        random = Math.floor(Math.random() * (quotes.length-1));
        if(random >= previous){
            quoteChange()
            return
        }
        setQuote(quotes[random])
    }

    return (
        <>
        <div className = "divContainer">
            <p className = "container">{quote}</p>
            <br />
            <button className = "randomize" onClick = {quoteChange} >Inspire Me!</button>
        </div> 
        </>
    )
}