"use client";

import React from "react";
import Image from "next/image"; // Import next/image component
import Link from "next/link";
import styles from "./Services.module.css";

const servicesData = [
  {
    borderSrc: "/assets/home-services/left-border-blue.png",
    borderAlt: "Left Border Blue",
    logoSrc: "/assets/home-services/detail-engineering.png",
    logoAlt: "Detail Engineering",
    title: "Detail Engineering",
    description:
      "Transforming concepts into precise specifications through analysis, planning, modeling, and collaboration to ensure practical, optimized, compliant designs.",
    link: "./services",
  },
  {
    borderSrc: "/assets/home-services/right-border-green.png",
    borderAlt: "Right Border Green",
    logoSrc: "/assets/home-services/fabrication.png",
    logoAlt: "Fabrication",
    title: "Fabrication",
    description:
      "Designing, welding, assembling, and testing components to create efficient, durable fluid storage and transport systems.",
    link: "./services",
  },
  {
    borderSrc: "/assets/home-services/left-border-blue.png",
    borderAlt: "Left Border Blue",
    logoSrc: "/assets/home-services/testing.png",
    logoAlt: "Testing & Commissioning",
    title: "Testing & Commissioning",
    description:
      "Rigorous testing procedures are adopted at SEE that ensures quality, safety, and compliance in infrastructure projects, reducing risks and enhancing performance.",
    link: "./services",
  },
  {
    borderSrc: "/assets/home-services/right-border-green.png",
    borderAlt: "Right Border Green",
    logoSrc: "/assets/home-services/supply.png",
    logoAlt: "Procurement & Supply",
    title: "Procurement & Supply",
    description:
      "Our global access to suppliers provides us insights into best in class products as well as innovations in the industry.",
    link: "./services",
  },
  {
    borderSrc: "/assets/home-services/left-border-blue.png",
    borderAlt: "Left Border Blue",
    logoSrc: "/assets/home-services/Installation.png",
    logoAlt: "Installation",
    title: "Installation",
    description:
      "We build the project, assuring the highest level of quality in line with schedule and cost benchmarks, in total compliance with local regulations.",
    link: "./services",
  },
  {
    borderSrc: "/assets/home-services/right-border-green.png",
    borderAlt: "Right Border Green",
    logoSrc: "/assets/home-services/quality.png",
    logoAlt: "Quality & Assurance",
    title: "Quality & Assurance",
    description:
      "Well defined management systems are in-place for core business functions (i.e. Engineering, Procurement, Construction, Quality, Environment, Safety, Administration, etc.)",
    link: "./services",
  },
];

const Services = () => {
  return (
    <>
      <div className="w-full h-auto">
        <div className="bg-image flex items-center flex-col">
          <h1 className="font-sans font-bold custom-h1 text-center w-full text-black">
            Services
          </h1>
          <h5 className="pt-4 custom-h5 font-sans font-medium text-center">
            We provide comprehensive and specialized solutions for piping, tanks and structures.
          </h5>
        </div>

        <div className="services-items mt-20 grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-20">
          {servicesData.map((service, index) => (
            <div className="items flex" key={index}>
              <div className="left-border relative w-full">
                <Image
                  src={service.borderSrc}
                  alt={service.borderAlt}
                  width={1000}
                  height={600}
                  className="cursor-pointer w-[82px]" // Ensure the image maintains its aspect ratio
                />
                <div className="absolute top-1/5 left-1/10 flex gap-4">
                  <Image
                    src={service.logoSrc}
                    alt={service.logoAlt}
                    width={52}
                    height={52}
                    className="cursor-pointer w-[58px] h-[58px] object-cover " // Ensure the image maintains its aspect ratio
                  />
                  <div className="content-area flex flex-col">
                    <Link href={service.link}>
                      <h4 className={`custom-h4 font-mont font-medium ${styles.serviceHeading}`}>
                        {service.title}
                      </h4>
                      <h6 className="pt-4 custom-h6 font-sans font-regular">
                        {service.description}
                      </h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
