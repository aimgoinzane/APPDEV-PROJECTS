import Footer from "./Footer"
import Header from "./Header"
import Body from "./body"

export default function App(){
  return(
    <>
    <Header />
    <Body name="Blue" food="softserved desserts" isHealthy={false} age="19" />
    <Body name="Red" food="hardserved desserts" isHealthy={false} age="21" />
    <Body name="Green" food="squid ink pasta" isHealthy={true} age="25" />
    <Body name="Yellow" food="chicken alfredo" isHealthy={true} age="52" />
    <Body name="White" food="hamburgers" isHealthy={false} age="33" />
    <Body />
    <Footer /> // This is a functional component
    </>
  )
}