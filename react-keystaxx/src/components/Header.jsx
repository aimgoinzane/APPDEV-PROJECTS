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
                <hr />
            </header>
        </>
    )
}