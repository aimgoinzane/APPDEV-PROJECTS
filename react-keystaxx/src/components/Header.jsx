import { Link, Route, Routes} from 'react'

import Reviews from './Reviews'
import Products from './Products'
import Home from './Home'
import About from './About'

export default function Header(){

    return(
        <>
            <header>
                <h1>KeyStaxx</h1>
                <h2>Keyboard company</h2>
                <nav>
                    <ul>
                        <li>
                            <Link to = "/">Home</Link>
                        </li>
                        <li>
                            <Link to = "/products">Products</Link>
                        </li>
                        <li>
                            <Link to = "/reviews">Reviews</Link>
                        </li>
                        <li>
                            <Link to = "/about">About</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path = "/" element = {<Home />} />
                    <Route path = "/products" element = {<Products />} />
                    <Route path = "/reviews" element = {<Reviews />} />
                    <Route path = "/about" element = {<About />} />
                </Routes>
                <hr />
            </header>
        </>
    )
}