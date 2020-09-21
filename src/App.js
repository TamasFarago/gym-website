import React from 'react'
import { Route, Switch} from "react-router-dom"
import Navbar from "./components/Navbar"
import "./App.css"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Offers from "./pages/Offers"


export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/what-we-offer/" component={Offers} />
      </Switch>
      <Footer />
    </>
  )
}
