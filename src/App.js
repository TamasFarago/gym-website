import React from 'react'
import { Route, Switch} from "react-router-dom"
import Navbar from "./components/Navbar"
import "./App.css"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Offers from "./pages/Offers"
import AboutPage from "./pages/AboutPage"
import Memberships from "./pages/Memberships"
import Join from "./pages/Join"
import Contact from "./pages/Contact"
import Error from "./pages/Error"
import Sidebar from "./components/Sidebar"


export default function App() {
  return (
    <>
      <Sidebar />
      <Navbar />
      
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/what-we-offer/" component={Offers} />
      <Route exact path="/about-us/" component={AboutPage} />
      <Route exact path="/memberships/" component={Memberships} />
      <Route exact path="/join/" component={Join} />
      <Route exact path="/contact/" component={Contact} />
      <Route component={Error} />
      </Switch>
      <Footer />
    </>
  )
}
