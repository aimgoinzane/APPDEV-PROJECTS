const colors = ["green", "red", "rgba(133, 122, 299)", 'f15025']
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

//function to change the colors of the Background
btn.addEventListener("click", () => {
    //target the body from the HTML
    console.log(document.body)
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})  
getRandomNumber = () => {
return Math.floor(Math.random() * colors.length)
}
