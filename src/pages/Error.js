import React, { Component } from 'react'
import TopPicture from "../components/TopPicture"
import errorPic from "../images/error.jpg"
import "../styles/Error.css"

export default class Error extends Component {
    constructor(props){
        super(props);
        this.state = {text: "404", picture: errorPic}
    }
    render() {
        return (
            <>
                <TopPicture 
                text={this.state.text}
                picture={this.state.picture}/>
                <div className="error">
                    <p>Sorry, the page you were trying to view does not exist.</p>
                </div>
            </>
        )
    }
}
