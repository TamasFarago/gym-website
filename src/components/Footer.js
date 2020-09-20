import React from 'react'
import "../styles/Footer.css"
import GoTop from "./GoTop"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faFacebookSquare, faInstagramSquare, faYoutube, faLinkedin, faYelp} from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
        <section className="footer">
            <div className="follow">
                <p>Follow us on our social channels!</p>
            </div>
            <div className="footer-container">
                <div className="footer-social">
                    <ul>
                        <li className="fb"><a><FontAwesomeIcon className="facebook" icon={faFacebookSquare}/></a></li>
                        <li className="insta"><a><FontAwesomeIcon className="instagram" icon={faInstagramSquare}/></a></li>
                        <li className="yt"><a><FontAwesomeIcon className="youtube" icon={faYoutube}/></a></li>
                        <li className="linkd"><a><FontAwesomeIcon className="linkedin"icon={faLinkedin}/></a></li>
                        <li className="ylp"><a><FontAwesomeIcon className="yelp" icon={faYelp}/></a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <p>(720)-415-3101</p>
                    <p>2249 Beechwood Avenue, Denver, CO 80202</p>
                </div>
                <div className="terms">
                    <ul>
                        <li>Privacy</li>
                        <li>Terms</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p>Copyright 2020 © All rights reserved</p>
                    <hr />
                    <p>Website by:<a href="#">Tamas Farago</a></p>
                    <p><GoTop scrollStepInPx="100" delayInMs="20"/></p>
                </div>
            </div>
            
        </section>
    )
}
