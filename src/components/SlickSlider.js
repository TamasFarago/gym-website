import React, { Component } from "react";
import Slider from "react-slick";
import "../styles/SlickSlider.css"



export default class SlickSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      
    };
    return (
      <div className="slick">
        <img src=""></img>
        <Slider className="slider-slick"
        {...settings}>
          <div className="review">
              
            <h3>"
              I was promptly dazzled by how dedicated and 
              talented the proprietors and mentors are in 
              helping you accomplish your objectives."</h3>
              <p>- John B.</p>
          </div>
          <div className="review">
            <h3>"Incredible staff, all extremely knowledgeable. The trainers are friendly and encouraging."</h3>
            <p>- Thomas M.</p>
          </div>
          <div className="review">
            <h3>"Best wellness center! I’ve been a devoted customer for over two years now and I have to say, this is the best place to get in shape and get diet and nutrition counseling!
            "</h3>
            <p>- Sarah J.</p>
          </div>
          <div className="review">
            <h3>"The crew keep me motivated to come back and one can see the results. I am more relaxed and can sustain stress more."</h3>
            <p>- Charley F.</p>
          </div>
          <div className="review">
            <h3>"Trainings are fun and cozy, and effortlessly become the feature of your day!"</h3>
            <p>- Andrew H.</p>
          </div>
          <div className="review">
            <h3>"Client assistance is eminent. I genuinely have seen an enormous improvement in my general versatility and quality."</h3>
            <p>- Jimmy J.</p>
          </div>
        </Slider>
      </div>
    );
  }
}