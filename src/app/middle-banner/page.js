// components/MiddleBanner.jsx
"use client";

import React from "react";
import Image from "next/image"; // Import next/image component
import Link from "next/link";

const imageData = [
  {
    src: "/assets/green-right-arrow.png",
    alt: "green-right-arrow",
    width: 16,
    height: 16,
    className: "cursor-pointer",
  },
  {
    src: "/assets/factory-picture-new.png",
    alt: "factory",
    width: 1000,
    height: 600,
    className: "cursor-pointer h-auto lg:h-[100svh] w-full object-contain lg:object-cover transition-transform duration-1000 transform scale-100 hover:scale-105",
  },
];

const MiddleBanner = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 items-center">
      <div className="text flex gap-12 flex-col px-6 md:px-20 py-12">
        <h1 className="custom-h3 font-sans font-medium text-white">
          At our company, we deliver a full spectrum of specialized power and
          process piping, tanks and structural solutions, ensuring excellence
          through our comprehensive engineering services and advanced
          manufacturing capabilities.
        </h1>

        <div className="flex gap-6 items-center">
          <div className="circle w-[2rem] h-[2rem] flex items-center justify-center bg-white rounded-full">
            <Image
              src={imageData[0].src}
              alt={imageData[0].alt}
              width={imageData[0].width}
              height={imageData[0].height}
              className={imageData[0].className}
            />
          </div>

          <div className="btn border-animation">
            <Link href="/about">
              <h3 className="custom-h4 font-sans font-medium text-white">
                Explore More
              </h3>
            </Link>
          </div>
        </div>
      </div>
      <div className="text flex items-center">
        <div className="relative overflow-hidden w-full">
          <Image
            src={imageData[1].src}
            alt={imageData[1].alt}
            width={imageData[1].width}
            height={imageData[1].height}
            className={imageData[1].className}
          />
        </div>
      </div>
    </div>
  );
};

export default MiddleBanner;
