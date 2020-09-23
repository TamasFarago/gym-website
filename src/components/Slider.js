import React, { useState } from 'react'
import "../styles/Slider.css"
import Carousel from 'react-bootstrap/Carousel'
import bg1 from "../images/bg1.comp.jpg"
import bg3 from "../images/bg3.comp.jpg"
import bg4 from "../images/bg4.comp.jpg"
import "../bootstrap/css/bootstrap.css"




export function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="bga">
    <Carousel 
    className="carousel-fade"
    activeIndex={index} 
    onSelect={handleSelect} 
    >
      <Carousel.Item>
        <img
          className="d-block w-100 bg bg1"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="carousel-cap">
          <h2>Building confidence.  <br />Building fitness.</h2>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 bg bg2"
          alt="Second slide"
        />

        <Carousel.Caption>
          <div className="carousel-cap">
          <h2>Exercise your<br /> mind and body.</h2>
          </div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 bg bg3"
          alt="Third slide"
        />

        <Carousel.Caption>
        <div className="carousel-cap">
          <h2>Fitter,<br />healthier,<br />happier.</h2>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

