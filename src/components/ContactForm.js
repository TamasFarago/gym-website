import React from 'react'
import "../styles/ContactForm.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPhone, faClock, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons"

export default function ContactForm() {
    return (
        <section className="contact-form">
            <div className="contact-form-container">
                <div className="sub-container">
                <p>If you have any questions or you just want to contact us, please use the from below and we'll get back to you as soon as possible.</p>
                <div className="contact-main-grid">
                    
                    <form className="content11">
                    <div className="contact-form-grid">
                    <div className="contact-form-group contact-content1">
                        <label htmlFor="firstnameform">First Name <span>*</span></label>
                        <input type="name" className="form-input-name" id="firstnameform" required></input>
                    </div>
                    <div className="contact-form-group contact-content2">
                        <label htmlFor="lastnameform">Last Name <span>*</span></label>
                        <input type="name" className="form-input-name" id="lastnameform" required></input>
                    </div>
                    <div className="contact-form-group contact-content3">
                        <label htmlFor="email">EMAIL <span>*</span></label>
                        <input type="email" className="form-input-name" id="email" required></input>
                    </div>
                    <div className="contact-form-group contact-content4">
                        <label htmlFor="phone">PHONE <span>*</span></label>
                        <input type="phone" className="form-input-name" id="phone" required></input>
                    </div>
                    </div>
                    <div className="contact-form-group textarea">
                        <label htmlFor="textarea">Type your message here </label>
                        <textarea type="text" className="form-input-text" id="textarea" rows="6"></textarea>
                    </div>
                    <button className="btn-send" type="submit" value="submit">Submit</button>
                    </form>
                    </div>
                    </div>
                    <div className="contact-box-container content22">
                            <div className="contact-box" id="contact-box">
                               
                                
                                <div className="phone-box">
                                    <div className="icon">
                                    <FontAwesomeIcon className="faPhone" icon={faPhone}/>
                                    </div>
                                    <div className="txt">
                                    <p><span>Phone:</span> (720)-415-3101</p>
                                    </div>
                                
                                </div>
                                <hr/>
                                
                                <div className="open-box">
                                <div className="icon2">
                                <FontAwesomeIcon className="faClock" icon={faClock}/>
                                </div>
                                <div className="txt1">
                                <p><span>Mon-Fri:</span> 5:30am-10:00pm<br/>
                                    <span>Sat:</span> 7:00am-8:00pm<br />
                                    <span>Sun:</span> 7:00am-10:00pm</p>
                                </div>
                                   
                                </div>
                                <hr/>
                                <div className="address-box">
                                <div className="icon2">
                                    <FontAwesomeIcon className="faMapMarkerAlt" icon={faMapMarkerAlt}/>
                                </div>
                                <div className="txt3">
                                <p>2249 Beechwood Avenue,<br/> Denver, CO 80202</p>
                                </div>
                                   
                                </div>
                                </div>
                                
                                

                                
                            
                    </div>
            </div>
        </section>
    )
}
