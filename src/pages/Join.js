import React, { Component } from 'react'
import JoinForm from "../components/JoinForm"
import TopPicture from "../components/TopPicture"
import JoinPic from "../images/join.comp.jpg"


export default class Join extends Component {
    constructor(props){
        super(props);
        this.state = {text: "Join Us!", picture: JoinPic}
    }
    render() {
        return (
            <section className="join">
                <TopPicture 
                    text={this.state.text}
                    picture={this.state.picture}/>
                <JoinForm />
         </section>
        )
    }
}

