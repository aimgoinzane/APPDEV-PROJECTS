//components for Item Num 1
const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () => {
    //pop variables
    let userName = document.getElementById("name").value
    let userAddress = document.getElementById("address").value
    let userNumber = document.getElementById("telephone").value
    let userMajor= document.getElementById("major").value
    let x = `Hello ${userName} from ${userAddress} and in ${userMajor} having contact details of ${userNumber}`
    document.getElementById("output").innerHTML = x
})

//end of Item Num 1

//components for Item Num 2
const btn2 = document.getElementById("btn2")
btn2.addEventListener("click", () => {
    //create the output
    let amountInput = document.getElementById("amountSales").value
    let amountProfit = amountInput * 0.23
    let display = `The total amount of profit calculated from this year's sales is ${amountProfit}`
    document.getElementById("output2").innerHTML = display
})

// end of Item Num 2

//components for Item Num 3
const btn3 = document.getElementById("btn3")
btn3.addEventListener("click", () => {
    //create the output
    let hourFirst = 60 * 5
    let hourSecond = 60 * 8
    let hourThird = 60 * 12 
    let display = `The distance the car will travel in 5 hours is ${hourFirst} <br>
                The distance the car will travel in 8 hours is ${hourSecond} <br>
                The distance the car will travel in 12 hours is ${hourThird}`
    document.getElementById("output3").innerHTML = display
})

// end of Item Num 3

//components for Item Num 4
const btn4 = document.getElementById("btn4")
btn4.addEventListener("click", () => {
    //create the outcome
    let numMiles = document.getElementById("miles").value
    let numGallon = document.getElementById("gallon").value
    let mpg = numMiles / numGallon
    let display = `The Miles-per-Gallon your car has consumed is ${mpg}`
    document.getElementById("output4").innerHTML = display

})

// end of Item Num 4

//components for Item Num 5
const btn5 = document.getElementById("btn5")
btn5.addEventListener("click", () => {
    //convert celsius to fahrenheit
    let degreeCelcius = document.getElementById("celcius").value
    let degreeFah = (9/5) * degreeCelcius + 32
    let display = `${degreeCelcius} degree Celcius is ${degreeFah} degree Fahrenheit`
    document.getElementById("output5").innerHTML = display

})

// end of Item Num 5

//components for Item Num 6
const btn6 = document.getElementById("btn6")
btn6.addEventListener("click", () => {
    //cookie calorie counter woooo
    let numberCookies = document.getElementById("cookie").value
    let numberCalories = numberCookies * ((300/40)*10)
    let display = `You have gained ${numberCalories} calories`
    document.getElementById("output6").innerHTML = display

})

// end of Item Num 6

//components for Item Num 7
const btn7 = document.getElementById("btn7")
btn7.addEventListener("click", () => {
    //convert celsius to fahrenheit
    let numberMan = document.getElementById("man").value
    let numberWoman = document.getElementById("unman").value
    let numberTotal = parseInt(numberMan) + parseInt(numberWoman)

    let ratioMan = (numberMan / numberTotal) * 100
    let ratioWoman = (numberWoman / numberTotal) * 100

    let display = `The class consisting of ${numberTotal} students are comprised of ${ratioMan}% Male and ${ratioWoman}% Female`
    document.getElementById("output7").innerHTML = display

})