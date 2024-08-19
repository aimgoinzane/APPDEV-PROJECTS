const quotes = ["It is not the man who has too little who is poor, but the one who hankers after more. \n- Seneca",
                 "So the man who restrains himself within the bounds set by nature will not notice poverty; the man who exceeds these bounds will be pursued by poverty however rich he. \n - Seneca", 
                 "A Man's life is dyed the color of his imagination. \n- Marcus Aurelius", 
                 "Times relieves the foolish from sorrow, but reason relieves the wise.\n - Epictetus", 
                "We suffer not from the events in our lives but from our judgement about them.\n - Epictetus",
                "Hurry up and live.\n - Seneca"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

//function to change the colors of the Background
btn.addEventListener("click", () => {
    //target the body from the HTML
    console.log(document.body)
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = quotes[randomNumber]
    color.textContent = quotes[randomNumber]
})  
getRandomNumber = () => {
return Math.floor(Math.random() * quotes.length)
}
