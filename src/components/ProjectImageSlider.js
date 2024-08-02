"use client";

import React, { useState, useEffect } from "react";
import styles from "./ProjectImageSlider.module.css"; // Import CSS module for styling

const ImageSlider = ({ images = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5000 milliseconds (5 seconds)

    return () => clearInterval(interval); // Cleanup function to clear interval on component unmount
  }, [images.length]); // Run effect when images length changes

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slideContainer}>
        <div
          className={styles.slidesWrapper}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className={styles.slide}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className={styles.image}
              />
            </div>
          ))}
        </div>
        {images.length > 1 && ( // Conditionally render navigation dots
          <div className={styles.navigation}>
            {images.map((_, index) => (
              <button
                key={index} // Ensure each button has a unique key
                className={`${styles.navigationButton} ${
                  index === currentSlide ? styles.activeDot : ""
                }`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
