import Footer from "./Footer"
import Header from "./Header"
import Body from "./Body"

export default function App(){
  return(
    <>
    <Header />
    <Body image="https://static.wikia.nocookie.net/streetsofrogue_gamepedia_en/images/c/c3/Zombie.png" name="Zombie" hobby="Football" isHostile={true} power="turning other people into Zombies" />
    <Body image="https://static.wikia.nocookie.net/streetsofrogue_gamepedia_en/images/8/84/Gorilla.png" name="Gorilla" hobby="Eating Bananas" isHostile={false} power="Simian Strength" />
    <Body image="https://static.wikia.nocookie.net/streetsofrogue_gamepedia_en/images/e/ed/Cannibal.png" name="Cannibal" hobby="Humans Alot" isHostile={true} power="Being a Cannibal" />
    <Body />
    <Footer />
    </>
    
  )
}