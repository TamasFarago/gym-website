import React, { Component } from 'react'
import "../styles/Home.css"
import {Slider} from "../components/Slider"
import About from "../components/About"
import HomeGrid from "../components/HomeGrid"

export default class Home extends Component {
    render() {
        return (
            <>
            <Slider />
            <About />
            <HomeGrid />
            </>
        )
    }
}
