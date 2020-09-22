import React from 'react'
import "../styles/JoinForm.css"

export default function JoinForm() {
    return (
        <section className="join-form">
            <div className="join-form-container">
                <p>We're happy you decided to join our amazing community!</p>
            
            <form>
                <div className="form-grid">
                <div className="form-group">
                    <label for="firstnameform">First Name <span>*</span></label>
                    <input type="name" className="form-input-name" id="firstnameform" required></input>
                </div>
                <div className="form-group">
                    <label for="lastnameform">Last Name <span>*</span></label>
                    <input type="name" className="form-input-name" id="lastnameform" required></input>
                </div>
                <div className="form-group">
                    <label for="email">EMAIL <span>*</span></label>
                    <input type="email" className="form-input-name" id="email" required></input>
                </div>
                <div className="form-group">
                    <label for="phone">PHONE <span>*</span></label>
                    <input type="phone" className="form-input-name" id="phone" required></input>
                </div>
                </div>
                <div className="form-group textarea">
                    <label for="textarea">Let us know if you have any questions </label>
                    <textarea type="text" className="form-input-text" id="textarea" rows="6"></textarea>
                </div>
                <button class="btn-send" type="submit" value="submit">Submit</button>
            </form>
            </div>
        </section>
    )
}
