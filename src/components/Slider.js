import React, { Component, useState } from 'react'
import "../styles/Slider.css"
import Carousel from 'react-bootstrap/Carousel'
import bg1 from "../images/bg1.jpg"
import bg2 from "../images/bg2.jpg"
import bg3 from "../images/bg3.jpg"
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
    fade="true" 
    interval="10000"
    controls="false">
      <Carousel.Item>
        <img
          className="d-block w-100 bg1"
          src={bg1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bg2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bg3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

