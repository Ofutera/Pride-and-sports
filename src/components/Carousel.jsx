import { React, useState } from "react";
import "./carousel.scss";
import TestimonialCard from "./UI/TestimonialCard";
import Arrow from "../images/arrow.png";

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const slideAnimation = (direction) => {
    if (direction === "right") {
      setCurrent(current + 1);
    } else if (direction === "left") {
      setCurrent(current - 1);
    }
  };

  return (
    <div className="carousel-section">
      <div className="carousel-container">
        <img
          src={Arrow}
          className="arrow left"
          alt="arrow"
          onClick={() => {
            slideAnimation("left");
          }}
        />
        <img
          src={Arrow}
          className="arrow right"
          alt="arrow"
          onClick={() => {
            slideAnimation("right");
          }}
        />
        <div
          className="carousel-cards"
          style={{
            transform: `translateX(${current * 100}px)`,
            transition: "all 1s ease-out",
          }}
        >
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
