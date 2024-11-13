import React, {useState} from "react"

export default function Shop(props) {
    let ShopItems = props.item // These are arrays of objects being passed to ShopItems
    let Change = 0


    const[cart, setCart] = useState([]) // Shopping Cart
    const [price, setPrice] = useState(0) // For Total Price
    const [change, setChange] = useState(0) // For Change

    function AddItem(item){
        setCart(c => [...c, item])
        setPrice(p => p + item.price)
    }

    function handlePayment() {
        let newPayment = document.getElementById("priceItem").value
        Change = parseFloat(newPayment)
        if(Change < 0){
            return window.alert("Cannot Pay with No Money")
        }
        setChange(c => Change - price)
    }
    
    function renderItems(){
        return(
            ShopItems.map((item) => {
                return(
                    <>
                    <br />
                    <li key = {item.id}> {item.name}</li>
                    <p>Price per Item: ${item.price}</p>
                    <button onClick={() => AddItem(item)}>Add to cart</button>
                    <br />
                    </>
                )
            })
        )
    }
    // function to render the items for the cart
    function renderCart() {
        return(
            cart.map((item) => {
                return(
                    <>
                        <li key = {item.id}> {item.name}</li>
                        <p>Price per Item: ${item.price}</p>
                        <br />
                    </>
                )
            })
        )
    }

    return(
        <>
            <h1> Welcome to the Shop</h1>
            <ol> {renderItems()} </ol>
            <hr />
            <h2> Le cart </h2>
            {cart.length > 0 ? 
            (<ul>{renderCart()}<h2>Total Amount: ${price}</h2></ul>) 
            : 
            (<p>There are no items in the cart.</p>)}
            <hr />
            <h2>Checkout</h2>
            <p>Total Amount: ${price}</p>
            <label>Enter Payment: </label> 
            <input type="number" id="priceItem"/>
            <button type="button" onClick={handlePayment}>Pay</button>
            <p>Change is: ${change} </p>
        </>
        )
    
}