import React, { Component } from 'react'
import {Link, NavLink} from "react-router-dom"
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
                    <Link to="/contact">
                    <li>Contact</li>
                    </Link>
                    
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
                  <NavLink exact to="/" activeClassName="selected">
                  <li>Home</li>
                  </NavLink>
                  <NavLink to="about-us" activeClassName="selected">
                    <li>About Us</li>
                  </NavLink>
                    
                  <NavLink to="/what-we-offer" activeClassName="selected">
                    <li>What we offer</li>
                  </NavLink>
                  <NavLink to="/memberships" activeClassName="selected">
                    <li>Memberships</li>
                  </NavLink>
                
                

                
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
