import React, {Component} from 'react'
import TopPicture from "../components/TopPicture"
import AboutGrid from "../components/AboutGrid"
import AboutPic from "../images/about.comp.jpg"


export default class AboutPage extends Component {
    constructor(props){
        super(props);
        this.state = {text: "About Us", picture: AboutPic}
    }
    render() {
        return (
            <section className="about-section">
                <TopPicture 
                    text={this.state.text}
                    picture={this.state.picture}/>
                <AboutGrid />
            </section>
        )
    }
}

