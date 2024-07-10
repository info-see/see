// components/ScrollToTopButton.js
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    isVisible && (
      <div
        onClick={scrollToTop}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`fixed right-20 bottom-20 w-[3rem] h-[3rem] rounded-full flex items-center justify-center cursor-pointer
          ${isHovered ? "bg-green" : "bg-white border"}
        `}
      >
        <Image
          src={isHovered ? "/assets/white-top-arrow.png" : "/assets/black-top-arrow.png"}
          alt="Go to top"
          width={16}
          height={16}
          className="rounded-full object-cover"
        />
      </div>
    )
  );
};

export default ScrollToTopButton;
