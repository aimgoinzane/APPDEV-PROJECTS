import React,{useState} from 'react';
import Login from './Login';

export default function Reviews(props) {

    let games = props.games

    const [reviews, setReviews] = useState([]);

    function AddReview(gameId) {

        const title = document.getElementById('title-' + gameId).value;
        const content = document.getElementById('content-' + gameId).value;

        if (!title || !content) {
            alert('Title and content are required!');
            return;
        }

        let reviews = {
            gameId: gameId,
            date: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
            title,
            content
        };

        setReviews((prevReviews) => [...prevReviews, reviews]);

        document.getElementById('title-' + gameId).value = '';
        document.getElementById('content-' + gameId).value = '';
    }

    const renderGames = () => {
        return(
            games.map((game) => {
                return(
                    <div className='game-card'>
                        <h2 key = {game.id}> {game.name}</h2>
                        <h4> Write a Review</h4>
                        Title: <input type="text" id={'title-' + game.id} />
                        <br />
                        <br />
                        Content:
                        <br />
                        <textarea id={'content-' + game.id} cols="40" rows="5"></textarea>
                        <br />
                        <button type="submit" onClick={() => AddReview(game.id)}>Submit</button>
                    </div>
                )
            })
        )
    }

    const renderGameReviews = () => {
        return reviews.map((review, index) => {
            const game = games.find(g => g.id === review.gameId);
            return (
                <div key={index} style={{ marginBottom: '20px' }} className='review-card'>
                    <h3>{game.name}</h3>
                    <h4>{review.title}</h4>
                    <p>{review.content}</p>
                    <small>{review.date}</small>
                </div>
            );
        });
    }
    
    if(props.isLoggedIn === false){
        return <Login />
    } else {
        return(
            <>
                <p>WELCOME KOMRADE BLYAAT</p>
                <div>
                    {renderGames()}
                </div>

                <hr />
                
                <div>
                    <h3>All Reviews:</h3>
                    {reviews.length > 0 ? (renderGameReviews()) : (<p>There are no reviews.</p>)}
                </div>
            </>
        )
    }
}