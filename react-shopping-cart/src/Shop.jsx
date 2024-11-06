import React, {useState} from "react"
import Login from "./Login"

export default function Shop(props) {
    let ShopItems = props.item // These are arrays of objects being passed to ShopItems

    const[cart, setCart] = useState([])

    function AddItem(item){
        setCart(c => [...c, item])
    }

    function renderItems(){
        return(
            ShopItems.map((item) => {
                return(
                    <>
                    <li key = {item.id}> {item.name}</li>
                    <p>Price per Item: ${item.price}</p>
                    <button onClick={() => AddItem(item)}>Add to cart</button>
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

    if(props.isLoggedIn === false){
        return <Login />
    } else {
        return(
            <>
                <h4> Welcome to the Shop</h4>
                <ul> {renderItems()} </ul>
                <h4> Le cart</h4>
                {cart.length > 0 ? (<ul>{renderCart()}</ul>) : (<p>There are no items in the cart.</p>)}  
            </>
        )
    }
}