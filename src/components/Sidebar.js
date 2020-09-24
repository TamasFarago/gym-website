import React, { Component } from 'react'
import "../styles/Sidebar.css"
import {Link, NavLink} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faFacebookSquare, faInstagramSquare, faYoutube, faLinkedin, faYelp} from "@fortawesome/free-brands-svg-icons"



    
    export default class Sidebar extends Component {
        constructor(props){
            super(props);
            this.state = {isOpen: false}
            this.toggleClass = this.toggleClass.bind(this)
            this.removeSide = this.removeSide.bind(this)
        }
        
       


        toggleClass = () =>{
            this.setState({isOpen: !this.state.isOpen})
        }
        removeSide = () => {
            this.setState({isOpen: false})
        }
        render() {

           
           
            return (
                <>
                    <div className="hamburger-menu" onClick={this.toggleClass}>
                    <div className={this.state.isOpen? "line1 line": "line"}></div>
                    <div className={this.state.isOpen? "line2 line": "line"}></div>
                    <div className={this.state.isOpen? "line3 line": "line"}></div>
                    </div>
                <div className={this.state.isOpen? "sidenav open" : "sidenav"}>
                    <div className="sidenav-contact">
                    <ul className="top-nav-list-side">
                        <li>(720)-415-3101</li>
                        <li>2249 Beechwood Avenue, Denver, CO 80202</li>
                        <Link to="/contact" onClick={this.removeSide}>
                        <li>Contact</li>
                        </Link>
                        
                    </ul>
                    </div>
                    <hr className="hr-side"/>
                        <div className="top-sidenav">
                            <div className="sidenav-list">
                                <ul>
                                    <NavLink exact to="/" activeClassName="selected" onClick={this.removeSide}>
                                    <li>Home</li>
                                    </NavLink>
                                    <NavLink to="/about-us" activeClassName="selected" onClick={this.removeSide}>
                                        <li>About Us</li>
                                    </NavLink>
                                        
                                    <NavLink to="/what-we-offer" activeClassName="selected" onClick={this.removeSide}>
                                        <li>What we offer</li>
                                    </NavLink>
                                    <NavLink to="/memberships" activeClassName="selected" onClick={this.removeSide}>
                                        <li>Memberships</li>
                                    </NavLink>
                                        <NavLink to="/join" activeClassName="selected" onClick={this.removeSide}>
                                        <li className="join-us-side">
                                        Join Us
                                        </li>
                                        </NavLink>
                                    </ul>
                            </div>
                            
                        </div>
                        
                        <div className="social-icons-side">
                            <ul>
                                <li><FontAwesomeIcon icon={faFacebookSquare}/></li>
                                <li><FontAwesomeIcon icon={faInstagramSquare}/></li>
                                <li><FontAwesomeIcon icon={faYoutube}/></li>
                                <li><FontAwesomeIcon icon={faLinkedin}/></li>
                                <li><FontAwesomeIcon icon={faYelp}/></li>
                            </ul>
                        </div>
                    </div>
                </>
            )
        }
    }
    
                   
