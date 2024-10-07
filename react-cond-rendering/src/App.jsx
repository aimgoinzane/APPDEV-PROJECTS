import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import ListOfFruits from './ListOfFruits'


function App() {
  // Collection of Fruit Objects
  const fruits = [
    {id: 1, name: "apple", color: "red"},
    {id: 2, name: "banana", color: "yellow"},
    {id: 3, name: "orange", color: "orange"},
    {id: 4, name: "grape", color: "purple"},
    {id: 5, name: "kiwi", color: "green"},
  ]

    // Collection of dessert objects.
  const desserts = [
    {id: 1, name: "cake", color: "red"},
    {id: 2, name: "ice cream", color: "blue"},
    {id: 3, name: "pie", color: "green"},
      

  // sort fruits in desc order
  // fruits.sort((a, b) => b.name.localeCompare(a.name))
  // sort fruits in asc order
  // fruits.sort((a, b) => a.name.localeCompare(b.name))
  // filter by color
  // const redFruits = fruits.filter(fruits => fruit.color === "red")  

  ]
  return (
    <>
    <Header />
    {fruits.length > 0 && <ListOfFruits items = {fruits} category = "My Favourite Fruits"/>}
    {desserts.length > 0 && < ListOfFruits items = {desserts} category = "My Favorite Desserts" />}
    <Footer />
    </>
  )
}

export default App
