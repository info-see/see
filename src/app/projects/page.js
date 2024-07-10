"use client";

import React from "react";
import Image from "next/image";

const projectData = [
  {
    src: "/assets/projects/olam-agri.png",
    alt: "Olam Agri",
    title: "Olam Agri",
    description:
      "Supply, fabrication & installation of IBR and non-IBR piping for 300 KLPD Syrup & grain-based Ethanol plant at Kolhapur, Maharashtra",
  },
  {
    src: "/assets/projects/rungta-mines.png",
    alt: "Rungta Mines",
    title: "Rungta Mines",
    description:
      "Supply, fabrication & installation of Non-IBR piping for power plant (20MW) and cooling tower",
  },
  {
    src: "/assets/projects/tamil-nadu-newsprint-g-paper.png",
    alt: "Tamil Nadu Newsprint & Paper",
    title: "Tamil Nadu Newsprint & Paper",
    description:
      "Erection of IBR steam piping (HP/MP/LP) for power plant (30MW) and process plant at Kagithapuram, Tamil Nadu",
  },
  {
    src: "/assets/projects/gobind-sugar-industries.png",
    alt: "Gobind Sugar/Zuari Industries",
    title: "Gobind Sugar/Zuari Industries",
    description:
      "Supply & Erection of 100 KLPD Multiproduct Distillery with Slop Fired Cogeneration Plant at Gularia, Uttar Pradesh",
  },
  {
    src: "/assets/projects/balrampur chini-mills.png",
    alt: "Balrampur Chini Mills",
    title: "Balrampur Chini Mills",
    description:
      "Supply & Erection of IBR & Non-IBR Piping & Appurtenances for 160 KLPD Multi-Product Distillery & Slop Fired Cogen Plant",
  },
  {
    src: "/assets/projects/aurobindo-pharma.png",
    alt: "Aurobindo Pharma",
    title: "Aurobindo Pharma",
    description:
      "Design, Supply, fabrication & installation of High/Medium/Low Pressure steam piping for Power (2X28MW) and Process Plant. CS water tanks fabrication & erection",
  },
  {
    src: "/assets/projects/andhra-pradesh-paper-mill.png",
    alt: "Andhra Pradesh Paper Mill",
    title: "Andhra Pradesh Paper Mill",
    description:
      "Design, Supply, fabrication & installation of IBR High/Medium/Low Pressure steam piping for Power and Process Plant.",
  },
  {
    src: "/assets/projects/algavista-greentech.png",
    alt: "Algavista Greentech",
    title: "Algavista Greentech",
    description:
      "Supply & Erection of IBR & NIBR Piping Appurtenances for 36 TPA Phycocyanin Green Field Project at Pudukottai, Tamil Nadu",
  },
];

const AllProject = () => {
  return (
    <div className="w-full">
      <div className="relative w-full h-auto">
        <Image
          src="/assets/slider-new-02.png"
          alt="about"
          width={1000}
          height={600}
          className="cursor-pointer w-full h-[75svh] object-cover"
        />
        <div className="absolute top-3/4 w-[80%] text-center left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="custom-h1 font-sans font-bold text-white">
            Recent Projects
          </h1>
        </div>
      </div>
      <div className="py-20 bg-darkgray">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 bg-white shadow-2xl transition-all duration-300 ease-in-out transform hover:shadow-xl"
              style={{ overflow: "hidden" }} // Ensure the overflow is hidden to prevent image overflow
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.src}
                  alt={project.alt}
                  width={1000}
                  height={600}
                  className="cursor-pointer transition-transform duration-1000 transform hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h4 className="custom-h4 font-bold font-sans">{project.title}</h4>
                <h6 className="custom-h5 font-sans pt-4">
                  {project.description}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProject;
