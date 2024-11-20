import React,{useState} from 'react';
import Reviews from "./Reviews";

export default function Login() {
    const account = {
        username: "admin",
        password: "admin"
    }

    let games = [
        {id:1, name:"Tekken 8"},
        {id:2, name:"Street Fighter 6"},
        {id:3, name:"Mortal Kombat 1"},
        {id:4, name:"Elden Ring"},
        {id:5, name:"Ghost of Tsushima"},
    ]

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [enteredUsernames, setEnteredUsernames] = useState("")
    const [enteredPasswords, setEnteredPasswords] = useState("")

    function handleUserNameChange(event) {
        setEnteredUsernames(event.target.value)
    }

    function handlePasswordChange(event){
        setEnteredPasswords(event.target.value)
    }

    function handleLogin(){
        if(account.username === enteredUsernames && account.password === enteredPasswords){
            setIsLoggedIn(true)
        } else {
            alert("Invalid Credentials, Try Again.")
        }
    }

    const renderLoginForm = () => {
        return(
            <div>
            <h1>Welcome to Wormmmy's Reviews!</h1>
            <h4>Login to Continue:</h4>
            Username: 
            <input type="text" name="username" id="username" onChange={handleUserNameChange} />
            <br />
            <br />
            Password:
            <input type="password" name="password" id="password" onChange={handlePasswordChange}/>
            <br />
            <br />
            <button type="button" onClick={handleLogin}>Login</button>
            </div>
        );
    }

    const renderReviews = () => {
        return(
            <>
                <Reviews isLoggedIn = {isLoggedIn} games = {games} />
            </>
        )
    }

    if(isLoggedIn === false){
        return renderLoginForm()
    } else {
        return renderReviews()
    }
}