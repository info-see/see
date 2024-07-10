"use client";

import React from "react";
import Image from "next/image";
const Industry = () => {
  return (
    <>
      <div className="w-full mt-20 bg-gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="flex item-center justify-center px-12 text-center">
            <h1 className="custom-h1 font-sans font-bold">
              SEE is Advancing the Future of Engineering Across Industries
            </h1>
          </div>
          <div className="">
            <Image
              src="/assets/industry-update.png"
              alt="Previous"
              width={1000}
              height={600}
              className="cursor-pointer "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Industry;
