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
                        <li className="fb"><FontAwesomeIcon className="facebook" icon={faFacebookSquare}/></li>
                        <li className="insta"><FontAwesomeIcon className="instagram" icon={faInstagramSquare}/></li>
                        <li className="yt"><FontAwesomeIcon className="youtube" icon={faYoutube}/></li>
                        <li className="linkd"><FontAwesomeIcon className="linkedin"icon={faLinkedin}/></li>
                        <li className="ylp"><FontAwesomeIcon className="yelp" icon={faYelp}/></li>
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
                    <p>Website by:<a href="https://tamasfarago.netlify.app" target="_blank" rel="noopener noreferrer" className="tamasfarago"> Tamas Farago</a></p>
                    <GoTop className="back-top" scrollStepInPx="100" delayInMs="20"/>
                </div>
            </div>
            
        </section>
    )
}
