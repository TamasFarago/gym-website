import React, {Component} from 'react'
import TopPicture from "../components/TopPicture"
import contactPic from "../images/contact.comp.jpg"
import ContactForm from "../components/ContactForm"


export default class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {text: "Contact", picture: contactPic}
    }
    render() {
        return (
            <div>
                <TopPicture 
                text={this.state.text}
                picture={this.state.picture}/>
                <ContactForm />
            </div>
        )
    }
}
