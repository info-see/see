"use client";

import React from "react";

const PressRelease = () => {
  return (
    <div className="relative p-5 rounded-2xl flex flex-col justify-between overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue opacity-75"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div>
          <h3 className="text-white font-sans custom-h3">
            Press Release
          </h3>

          <h4 className="mt-10 text-white font-sans font-regular custom-h4">
            CB&I Recognized with 2023 Steel Tank Institute/Steel Plate
            Fabricators Association Tank of the Year Awards
          </h4>
        </div>
        <div className="button">
          <button className="mt-10 py-2 px-5 text-white font-regular text-sm border border-white">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default PressRelease;
