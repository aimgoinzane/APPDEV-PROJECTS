import Footer from "./Footer"
import Header from "./Header"
import Body from "./Body"
import Profile from "./Profile"

export default function App(){
  return(
    <>
    <Header />
    <Body image="https://static.wikia.nocookie.net/streetsofrogue_gamepedia_en/images/c/c3/Zombie.png" name="Zombie" endurance="" speed='1' melee="3" firearms='1'/>
    <Body image="https://static.wikia.nocookie.net/streetsofrogue_gamepedia_en/images/8/84/Gorilla.png" name="Gorilla" endurance="4" speed='4' melee="4" firearms="1"/>
    <Body image="https://static.wikia.nocookie.net/streetsofrogue_gamepedia_en/images/e/ed/Cannibal.png" name="Cannibal" endurance="2" speed='2' melee="3" firearms="2" />
    <Body />
    <Footer />
    </>
    
  )
}