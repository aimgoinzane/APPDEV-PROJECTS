import { useLocation } from "react-router-dom"
// This is the same as useState Hook
// But this uses the URLS of our components to pass Data to another Component


export default function Game() {
    const location = useLocation()
    const game = location.state.game
    return(
        <>
            <div>
                <h1>{game.name}</h1>
                <img src = {game.image} />
                <p>{game.description}</p>
                <h2>Reviews</h2>
                
                
                
            </div>
        </>
    )
}