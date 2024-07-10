"use client";
// ImageSlider.jsx
// ImageSlider.jsx
// ImageSlider.jsx
// ImageSlider.jsx
// ImageSlider.jsx

import React, { useState, useEffect } from "react";
import styles from "./ImageSlider.module.css"; // Import CSS module for styling

const ImageSlider = ({ images = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 3000 milliseconds (3 seconds)

    return () => clearInterval(interval); // Cleanup function to clear interval on component unmount
  }, [images.length]); // Run effect when images length changes

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleButtonClick = (url) => {
    // Redirect to the URL specific to the image
    window.location.href = url;
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slideContainer}>
        <div
          className={styles.slidesWrapper}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className={styles.slide}>
              <div className="relative">
                <img
                  src={image.url}
                  alt={`Slide ${index + 1}`}
                  className={styles.image}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
                <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:top-1/3 lg:left-1/11 lg:transform lg:translate-x-1 lg:translate-y-1 text-white flex flex-row">
                  <div className="flex flex-col">
                    <h2
                      className="cursor-pointer font-sans text-center lg:text-left font-bold text-white custom-h1 w-full px-4 lg:px-0  lg:w-[60%] margin-auto"
                      dangerouslySetInnerHTML={{ __html: image.heading }}
                      onClick={() => handleButtonClick(image.redirectUrl)}
                    />
                    <div className="mt-4 px-4 lg:px-0 text-center lg:text-left">
                  
                    <button
                      className=" border-2     hover:bg-white hover:text-black border-white font-medium  custom-h5 text-white font-sans custom-h5 py-2 px-12 "
                      onClick={() => handleButtonClick(image.redirectUrl)}
                    >
                      {image.buttonText}
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
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
      </div>
    </div>
  );
};

export default ImageSlider;
