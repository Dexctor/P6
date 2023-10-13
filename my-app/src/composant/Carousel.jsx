import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/carousel.scss';
import 'font-awesome/css/font-awesome.min.css';

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slides = document.querySelector('.slides');
    if (slides) {
      slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      {images.length > 1 && (
        <>
          <button className="prev-button" onClick={prevSlide}><FontAwesomeIcon icon={faChevronLeft} /></button>
          <button className="next-button" onClick={nextSlide}><FontAwesomeIcon icon={faChevronRight} /></button>
          <div className="counter">{`${currentSlide + 1} / ${images.length}`}</div>
        </>
      )}
      <div className="slides">
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
