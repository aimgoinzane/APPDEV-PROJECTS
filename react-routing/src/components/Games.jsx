import { Link } from "react-router-dom"
const games = [
    {id: 1, name: 'Teamfight Tactics',  description: 
    'This is the number one auto battling game (Kinda Mid)'},
    {id: 2, name: 'Valorant',  description: 
    'This is the number one FPS game (I Dont Like the game)'},
    {id: 3, name: '2xKO',  description: 
    'This is the number one tag-team fighting game (Simplified)'},
    {id: 4, name: 'League of Legends',  description: 
    'This is the number one MOBA game (Pure SweatFest)'},
]

export default function Games() {
    return(
        <>
            <h1>Games List! : owo</h1>
            <ul>
                {games.map((game) => (
                    <li key = {game.id}>
                        <Link to = {`/games/${game.id}`} state = {{game}}>
                        <strong>{game.name}</strong>
                        </Link> 
                        - {game.description}
                    </li>
                ))}
            </ul>
        </>
    )
}