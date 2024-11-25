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
                <p>{game.description}</p>
            </div>
        </>
    )
}