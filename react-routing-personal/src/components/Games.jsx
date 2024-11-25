import { Link } from "react-router-dom"
const games = [
    {id: 1, image: 'https://static.wikia.nocookie.net/freddy-fazbears-pizza/images/d/da/FNaF1.jpg', name: "Five Nights at Freddy's",  description: 
    'Welcome to your new summer job at Freddy Fazbears Pizza, where kids and parents alike come for entertainment and food! The main attraction is Freddy Fazbear, of course; and his two friends. They are animatronic robots, programmed to please the crowds!'},
    {id: 2, image: 'https://static.wikia.nocookie.net/freddy-fazbears-pizza/images/7/73/FNAF_2_picture.png', name: "Five Nights at Freddy's 2",  description: 
    'Welcome back to the new and improved Freddy Fazbears Pizza! As always, Fazbear Entertainment is not responsible for death or dismemberment.'},
    {id: 3, image: 'https://static.wikia.nocookie.net/freddy-fazbears-pizza/images/7/70/FNaF3_Steam_Greenlight_Icon.png', name: "Five Nights at Freddy's 3",  description: 
    'Thirty years after Freddy Fazbears Pizza closed its doors, the events that took place there have become nothing more than a rumor and a childhood memory, but the owners of "Fazbears Fright: The Horror Attraction" are determined to revive the legend and make the experience as authentic as possible for patrons, going to great lengths to find anything that might have survived decades of neglect and ruin.'},
    {id: 4, image: 'https://static.wikia.nocookie.net/freddy-fazbears-pizza/images/6/6c/Fnaf_4_desktop_icon.jpg',name: "Five Nights at Freddy's 4",  description: 
    'In this last chapter of the Five Nights at Freddys original story, you must once again defend yourself against Freddy Fazbear, Chica, Bonnie, Foxy, and even worse things that lurk in the shadows. Playing as a child whose role is yet unknown, you must safeguard yourself until 6am by watching the doors, as well as warding off unwanted creatures that may venture into your closet or onto the bed behind you.'},
    {id: 5, image: 'https://static.wikia.nocookie.net/freddy-fazbears-pizza/images/e/e5/FNAFSL_Steam_Store_Page_Header.jpg',name: "Five Nights at Freddy's: Sister Location",  description: 
    'Welcome to Circus Babys Pizza World, where family fun and interactivity go beyond anything youve seen at those *other* pizza places! With cutting-edge animatronic entertainers that will knock your kids socks off, as well as customized pizza catering, no party is complete without Circus Baby and the gang!'},
]

export default function Games() {
    return(
        <>
            <h1>Games List: =w=</h1>
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