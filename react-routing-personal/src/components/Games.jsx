import { Link } from "react-router-dom"
const games = [
    {id: 1, image: 'https://static.wikia.nocookie.net/triple-a-fazbear/images/8/8f/690x0w.png', name: "Five Nights at Freddy's",  description: 
    'Welcome to your new summer job at Freddy Fazbears Pizza, where kids and parents alike come for entertainment and food! The main attraction is Freddy Fazbear, of course; and his two friends. They are animatronic robots, programmed to please the crowds!',
    r1: "blackman3000 Simple, iconic gameplay. Decent replayability and a decent amount of content for 5 bucks.",
    r2: "Rascal :] Hehe, Feddy Fazbar. It's been ten years but this game is still scary, and I'm still autistic. FNaF is good at being a horror game and the lore is still pretty crazy, and it will continue to get more crazy most likely.",
    r3: "novatic har har har har",
    r4: "420mlgGamer I like the Chicken",
    r5: "negativitymiky 4/20 to easy"},
    {id: 2, image: 'https://static.wikia.nocookie.net/fivenightsatfreddys/images/b/b3/480px-Five_Nights_at_Freddy%27s_2_icon.jpg', name: "Five Nights at Freddy's 2",  description: 
    'Welcome back to the new and improved Freddy Fazbears Pizza! As always, Fazbear Entertainment is not responsible for death or dismemberment.',
    r1: "meowflow: one of my fav fnaf games, been watching markimoo since like 2017, love fnaf 2 :D",
    r2: "YoGamerDud: 10/10 game. the only real rng nights are nights 6 and 10/20 due to the one animatronic that appears on night 1, toy bonnie. hes completly rng",
    r3: "morgan_lori_uncle: i like this sequel bc its classic and super fun and hard nights and hard challenges",
    r4: "UrAnus: i wanna shoot balloon boy",
    r5: "uncouthCountress: This game is pretty hard, but I would recommend it! ( if you like a challenge!)"},
    {id: 3, image: 'https://static.wikia.nocookie.net/freddy-fazbears-pizza/images/7/70/FNaF3_Steam_Greenlight_Icon.png', name: "Five Nights at Freddy's 3",  description: 
    'Thirty years after Freddy Fazbears Pizza closed its doors, the events that took place there have become nothing more than a rumor and a childhood memory, but the owners of "Fazbears Fright: The Horror Attraction" are determined to revive the legend and make the experience as authentic as possible for patrons, going to great lengths to find anything that might have survived decades of neglect and ruin.',
    r1: "CreativeName735 Way better than people give it credit for, I actually wouldn't mind coming back to play it again...unlike other games (fnaf 2)  ",
    r2: "Doakem that jumpscare is kinda dookie im eating a bag of children right now i always come back also did afton testicles get crushed when springlocked",
    r3: "Peacan54 fnaf 3 is okay i wish the phantoms were more unique instead of being 'you BETTER switch off this camera!!!!!!!!!!!!!!!!' 9 times",
    r4: "silly_billy_bean best dating sim ive ever played",
    r5: "Big Frank West My favorite FNAF game, ignoring FNAF1."},
    {id: 4, image: 'https://static.wikia.nocookie.net/freddy-fazbears-pizza/images/6/6c/Fnaf_4_desktop_icon.jpg',name: "Five Nights at Freddy's 4",  description: 
    'In this last chapter of the Five Nights at Freddys original story, you must once again defend yourself against Freddy Fazbear, Chica, Bonnie, Foxy, and even worse things that lurk in the shadows. Playing as a child whose role is yet unknown, you must safeguard yourself until 6am by watching the doors, as well as warding off unwanted creatures that may venture into your closet or onto the bed behind you.',
    r1: "Firefy281 After I 100% the game at July of this year, I still think this is a really good game because the gameplay really holds it up. 10/10",
    r2: "HappyMatty12345 This game cured my depression, 10/10 would try again",
    r3: "SkywallkerTAT You're broken. We are still your friends. Do you still believe that? I'm still here. I will put you back together.",
    r4: "landon No No No No No No No No No AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    r5: "jasminecore_ CLANG CLANG CLANG THE VOICES I HEAR EVERYTIME I WALK UP TO THOSE GOD FORSAKEN DOORS MAKES ME SHIT MYSELF"},
    {id: 5, image: 'https://static.wikia.nocookie.net/triple-a-fazbear/images/9/9e/FNAF6MobileIcon.jpg',name: "Five Nights at Freddy's: Sister Location",  description: 
    'Welcome to Circus Babys Pizza World, where family fun and interactivity go beyond anything youve seen at those *other* pizza places! With cutting-edge animatronic entertainers that will knock your kids socks off, as well as customized pizza catering, no party is complete without Circus Baby and the gang!',
    r1: "Andrew Heilman Incredibly hard at times, but very rewarding.",
    r2: "Hot_Dog7 I got this game over 4 years ago. Still haven't gotten past the winding of those god forsaken springlocks.",
    r3: "emailiawang Love this game but night 4 is driving me crazy",
    r4: "SkywallkerTAT It's a strange thing to want to do, to come here. I'm curious, what events would lead a person, to want to spend their nights in a place like this... willingly.",
    r5: "madzookeper856 I can confirm the sister is in the location"},
]

export default function Games() {
    return (
        <>
            <h1>Games List:</h1>
            <div className="games-container">
                {games.map((game) => (
                    <div key={game.id} className="game-card">
                        <Link to={`/games/${game.id}`} state={{ game }} className="game-link">
                            <img src={game.image} />
                            <h2>{game.name}</h2>
                            <p>{game.description}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}