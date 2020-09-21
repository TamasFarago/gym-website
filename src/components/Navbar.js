import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "../styles/Navbar.css"
import logo from "../images/logo.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faFacebookSquare, faInstagramSquare, faYoutube} from "@fortawesome/free-brands-svg-icons"



export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {activeClass: ""}
      }
      
      componentDidMount(){
        window.addEventListener('scroll', () => {
           let activeClass = 'top';
           if(window.scrollY === 0){
               activeClass = '';
           }
           this.setState({ activeClass });
        });
    }
    
    componentWillUnmount() { window.removeEventListener('scroll'); }
    render() {
        return (
            <>
            <header className={this.state.activeClass}>
            <Link to="/">
                <a href="#" className="logo"><img src={logo}></img></a>
            </Link>
            <div className="top-bar">
                <ul className="top-nav-list">
                    <li>(720)-415-3101</li>
                    <li>2249 Beechwood Avenue, Denver, CO 80202</li>
                    <li><a href="#">Contact</a></li>
                </ul>
                    <div className="social-icons">
                        <ul>
                            <li><FontAwesomeIcon icon={faFacebookSquare}/></li>
                            <li><FontAwesomeIcon icon={faInstagramSquare}/></li>
                            <li><FontAwesomeIcon icon={faYoutube}/></li>
                        </ul>
                    </div>
                
            </div>
            <hr className="hr"></hr>
            <div className="nav-menu">
              <ul>
                  <Link to="/what-we-offer">
                    <li><a href="#">What we offer</a></li>
                  </Link>
                <li><a href="#">memberships</a></li>
                <li><a href="#">for members</a></li>
                <li><a href="#">offers</a></li>

                
                   <a className="join-btn" href="#"><div className="join-us">
                       Join Us
                   </div>
                   </a>
                
              </ul>
              </div>
            </header>
            <section className="banner"></section>
            
            </>
        )
    }
}
