import React, {useState} from 'react';

export default function FavoriteGames() {
    // Le Array or Le Stateful Array
    const [games, setGames] = useState(["Doomsday Hunters", "Hades", "ScourgeBringer"])

    function handleAddGame() {
        // referencing the text box
        const newGame = document.getElementById("gameInput").value;
        setGames(g => [...g, newGame]) // adding newGame (new object to be inserted) into our list g
            // g is the previous list
            // ... iterates over the list
        document.getElementById("gameInput").value = "";
    }

    function handleRemoveGame(index) {
        const newGame = games.filter((game,i) => i !== index);
        setGames(newGame)
    }
    
    return(
        <>
        <div>
            <h2> These are my Favorite Games in 2024:</h2>
            <ul>
                {
                    games.map((game, index) => <li key = {index} onClick = {() => handleRemoveGame(index)}> {game} </li>)
                }
            </ul>
            <input type="text" name="gameInput" id="gameInput" />
            <button type="button" onClick={handleAddGame}> Add Game </button>
        </div>
        </>
    )
}