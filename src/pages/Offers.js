import React, { Component } from 'react'
import "../styles/Offers.css"
import TopPicture from "../components/TopPicture"
import OfferGrid from "../components/OfferGrid"
import toppic from "../images/toppic.comp.jpg"


export default class Offers extends Component {
    constructor(props){
        super(props);
        this.state = {imageUrl: toppic}
    }

   
    render() {
        return (
            <>
             <TopPicture />
            <OfferGrid />
            </>
        )
    }
}
