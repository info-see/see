"use client";

import React from "react";
import Link from "next/link";

const RecentProject = () => {
  return (
    <div className="relative p-5 h-full rounded-2xl flex flex-col justify-between overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-green opacity-75"></div>

      {/* Content */}

        <div className="z-10">
          <h3 className="text-white font-sans custom-h3">Recent Project</h3>
          <div className="min-h-[100px] max-h-[160px] overflow-hidden">
            {" "}
            <h4 className="mt-10 text-white font-sans font-regular custom-h4 ">
              Tamil Nadu Newsprint & Paper
            </h4>
            <p className="mt-4 text-white font-sans font-regular 2xl:text-xl lg:text-base md:text-sm sm:text-sm text-sm">
              Erection of IBR steam piping (HP/MP/LP) for power plant (30MW).
            </p>
          </div>
        </div>

        <div className="z-10"> 
          <Link href="/projects">
          <button className="mt-10 py-2 px-5 text-white font-regular text-sm border border-white">
            Read More
          </button>
          </Link>


      </div>
    </div>
  );
};

export default RecentProject;
