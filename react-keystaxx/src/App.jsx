import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Products from './components/Products'
import Reviews from './components/Reviews'
import About from './components/About'
import NotFound from './components/NotFound'
import Keys from './components/Keys'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="web">
        <nav>
          <ul class="nav-container">
            <li id='logo'>
              <h1>KeyStaxx</h1>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          {/*<Route path="/products" element={<Products />}></Route>*/}
          <Route path="/products">
            <Route index element = {<Products />} />
            <Route path = ":keyID" element = {<Keys />} />
          </Route>
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
