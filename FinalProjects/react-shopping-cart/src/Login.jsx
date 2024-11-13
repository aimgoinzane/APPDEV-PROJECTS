import React,{useState} from 'react'
import Shop from './Shop'
import AdminPanel from './Admin'

export default function Login() {
    let items = [
        {id: 1, name: 'Item 1', price: 10},
        {id: 2, name: 'Item 2', price: 15},
        {id: 3, name: 'Item 3', price: 20},
        {id: 4, name: 'Item 4', price: 25},
      ] // List of Objects to be imported as props    

    let accounts = [
        {id: 1, username: 'customer', password: 'customer', role: 'customer'},
        {id: 2, username: 'admin', password: 'admin', role: 'admin'},
    ] // accounts list

    // boolean state for logging in
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    // var for roles
    const [role,setRole] = useState("")
    // var for usernames
    const [enteredUsernames, setEnteredUsernames] = useState("")
    // var for passwords
    const [enteredPasswords, setEnteredPasswords] = useState("")

    // functional handlers for updating usernames
    function getUsernames(event) {
        setEnteredUsernames(event.target.value)
    }
    // functional handlers for updating passwords
    function getPasswords(event){
        setEnteredPasswords(event.target.value)
    }
    // functional handler for handling the login process
    function handleLogin(){
        accounts.map((account) => {
            if(account.username === enteredUsernames && account.password === enteredPasswords){
                setIsLoggedIn(true)
                setRole(account.role)
            }
        })
    }

    // component for rendering the login page
    const renderLogin = () => {
        return(
            <div>
                <h1>Login: </h1>
                Username: <input type="text" placeholder='Username' id='username' onChange={getUsernames} />
                Password: <input type="text" placeholder="Password" id="password" onChange={getPasswords} />
                <button onClick={handleLogin}>Login</button>
            </div>
        )
    }

    // component for rendering the shop
    const renderShop = () => {
        return(
            <Shop isLoggedIn = {isLoggedIn} item = {items} />
        )
    }

    const renderAdmin = () => {
        return(
            <AdminPanel isLoggedIn = {isLoggedIn} accounts = {accounts} />
        )
    }

    if(isLoggedIn === false){
        return renderLogin()
    } else {
        if(role === 'customer'){
            return renderShop()
        } else if (role === 'admin') {
            return renderAdmin()
        } else {
            return renderLogin()
        }
    }

}