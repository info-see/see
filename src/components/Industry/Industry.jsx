"use client";

import React, { useState } from "react";
import Image from "next/image"; // Import next/image component
import Link from "next/link";

const Industry = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const content = [
    "CB&I Recognized with 2023 Steel Tank Institute/Steel Plate Fabricators Association Tank of the Year Awards",
    "Another example headline for the industry news",
    "Yet another headline for the slider",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === content.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? content.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative p-5 h-full rounded-2xl flex flex-col justify-between overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue opacity-75"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-content">
        <div>
          <div className="content flex justify-between items-baseline">
            <div>
              <h3 className="text-white font-sans custom-h3">Industry</h3>
            </div>
            <div className="flex gap-8">
              <Image
                src="/assets/PrevArrow.png"
                alt="Previous"
                width={32}
                height={32}
                className="cursor-pointer"
                onClick={prevSlide}
              />

              <Image
                src="/assets/NextArrow.png"
                alt="Next"
                width={32}
                height={32}
                className="cursor-pointer"
                onClick={nextSlide}
              />
            </div>
          </div>
          <h4 className="mt-10 text-white font-sans font-regular custom-h4 min-h-[100px] max-h-[100px] overflow-hidden">
            {content[currentIndex]}
          </h4>
        </div>

        <div className="button">
          <Link href="/industry">
            <button className="mt-10 py-2 px-5 text-white font-regular text-sm border border-white">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>  
  );
};

export default Industry;
