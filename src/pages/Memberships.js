import React, {Component} from 'react'
import Pricing from "../components/Pricing"
import PricingPic from "../images/pricing.comp.jpg"
import TopPicture from "../components/TopPicture"


export default class Memberships extends Component {
    constructor(props){
        super(props);
        this.state = {text: "Pricing", picture: PricingPic}
    }
    render() {
        return (
            <section className="memberships">
                <TopPicture
                    text={this.state.text}
                    picture={this.state.picture}/>             
                    <Pricing />
            </section>
        )
    }
}
