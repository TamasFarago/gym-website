import React from 'react'
import "../styles/AboutGrid.css"

export default function AboutGrid() {
    return (
        <section className="about-section">
        <div className="about-grid-section">
            <div className="about-grid-container">
                <div className="about-grid about-grid-content-1">
                    <div className="about-img-container1"></div>
                    
                </div>
                <div className="about-grid about-grid-content-2">
                    <div className="about-text-grid-container">
                        <p>In 2015, we made the striking move of opening our shop in Denver with the aim of building up a regarded foundation and brand in the wellness business that advances predominant quality assistance, training, and instruction. Perform for Life's establishments were tons of building trust and making a network where customers feel acknowledged and esteemed, and a domain for fitness coaches to set up vocations in which they are upheld and supported in their expert undertakings. We are enthusiastic about helping other people perform better in game, diversion, and above all: Life.</p>
                    </div>
                </div>
            </div>
      </div>
      <hr/>
      <div className="values">
          <div className="values-container">
              <h2>Our Values</h2>
              <div className="values-p">
              <p><span>LEARNING:</span> Knowledge is power, and we believe in empowering ourselves so we can empower you!</p>
              <p><span>Honesty: </span>We work to construct trust in the wellness business, with each other, and with you. That implies we make duties and oversee them.</p>
              <p><span>BALANCE: </span>We advance a solid, adjusted way of life, and are an impetus to your improved prosperity.</p>
              <p><span>FAMILY: </span>We aren't simply colleagues, we're a family, and when you stroll through our entryways we think of you as family as well.</p>
              <p><span>Enthusiasm: </span>We have aspiration and heart that is appeared without hesitation to rouse you to be simply the best form.</p>
              </div>
          </div>
      </div>
      </section>
    )
}
