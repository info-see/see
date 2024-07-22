"use client";

import React from "react";
import Image from "next/image";
const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-80 z-50">
      <div className="w-[10rem] h-[10rem]">
        <Image
          src="/assets/loader.png"
          alt="loader"
          width={1000}
          height={600}
          priority
          className="w-[5rem] h-auto"
        />
      </div>
    </div>
  );
};

export default Loader;
