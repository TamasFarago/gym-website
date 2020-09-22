import React,{ Component } from 'react'
import "../styles/TopPicture.css"

export default class TopPicture extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    
    render() {
        const pic = this.props.picture
        
        return (
             <section className="top-picture" style={{ backgroundImage: `url(${pic})` }}>
                <div className="top-pic-title">
                   <h1>{this.props.text}</h1>
                </div>
             </section>
        )
    }
}

