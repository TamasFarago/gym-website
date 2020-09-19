import React from 'react'
import "./components/fontawesomeicons/index"
import { Route, Switch} from "react-router-dom"
import Navbar from "./components/Navbar"
import "./App.css"
import Home from "./pages/Home"



export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home}/>

      </Switch>
    </>
  )
}
