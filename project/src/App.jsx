import Card from "./Card.jsx"
import Navbar from "./Navbar.jsx"
import './App.css'
import Home from "./Home.jsx"
import productArray from "./Data.js"
import Footer from "./Footer.jsx"

function App() {


  return (
    <>
    <Navbar></Navbar>
    {/* <Card obj={productArray}></Card> */}
    <Home ></Home>
    <Footer></Footer>
    </>
  )
}

export default App
