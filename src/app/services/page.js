"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link

const services = () => {
  return (
    <>
      <div className="">
        <div className="relative w-full h-auto">
          <Image
            src="/assets/services/detail-services.png"
            alt="about"
            width={1000}
            height={600}
            className="cursor-pointer w-full h-[75svh] object-cover"
          />
          <div className="absolute top-3/4 w-[80%] text-center left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="custom-h1   font-sans font-bold text-white">
              Our Services, HSE & Security
            </h1>
          </div>
        </div>

        <div className="container mt-20 px-6 lg:px-40 w-full">
          <h5 className="custom-h4 py-5 lg:leading-custom-36 leading-custom-28 font-sans font-regular">
            SEE provides a complete range of services including but not limited
            to detailed engineering, fabrication, bought out supply, inspection
            & testing, quality assurance, installation & erection, and project
            management.
          </h5>

          <h5 className="custom-h4 py-5 lg:leading-custom-36 leading-custom-28 font-sans font-regular">
            SEE has a very vast experience in all mechanical works - Welding and
            Fabrication Areas with a key focus in Sugar, Paper, Steel and Oil &
            Gas Piping and Pipelines, Storage Tanks with all the HSE & Quality
            Standards.
          </h5>
        </div>

        <div className="container mt-20 px-10 lg:px-40 w-full">
          <h2 className="custom-h2 py-5 text-center lg:leading-custom-38 border-t-2 border-b-2 leading-custom-32 font-sans font-regular">
            The company has full{" "}
            <span className="text-green font-bold">
              capability, experience and resources
            </span>{" "}
            in terms of{" "}
            <span className="text-green font-bold">
              manpower, management team and equipment
            </span>{" "}
            fleet to execute mechanical works.
          </h2>
        </div>

        <div className="container mt-20 py-20 w-full bg-servicegray sm:rounded-2xl">
          <h2 className=" custom-h2 text-center w-full font-bold font-sans text-white">
            Our operation areas include but not limited to the following:
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 gap-8">
            <div className="text-content">
              <h4 className="custom-h4 py-6 font-sans font-regular leading-custom-28 lg:leading-custom-34 text-white">
                <span className="font-bold">
                  Piping design, Supply, Fabrication, and Installation for:
                </span>{" "}
                cooling water system, Raw water, DM water and make up water,
                Effluent system, Plant steam system, Condensate system,
                Concentrated spend wash system, fire system.
              </h4>

              <h4 className="custom-h4 py-6 font-sans font-regular leading-custom-28 lg:leading-custom-34 text-white">
                <span className="font-bold">
                  Design, Fabrication, and Installation for:
                </span>{" "}
                Storage tanks, Fabricated parts, Fittings, Pressure parts,
                Flanges, Super heater coils, Economizers, Boiler tubes, Headers
                etc.
              </h4>
            </div>

            <div className="services-image">
              <Image
                src="/assets/services/services-piping.png"
                alt="about"
                width={1000}
                height={600}
                className="cursor-pointer object-cover w-full max-h-[360px] rounded-2xl"
              />
            </div>
          </div>
        </div>

        <div className="container mt-20 px-10 lg:px-30 w-full">
          <h2 className="custom-h2 text-center w-full font-sans font-bold">
            Design, supply, fabrication & installation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24 gap-12">
            {[
              "Pump and compressor installations",
              "Injection and re-injection facilities",
              "Flow Lines",
              "Horizontal Directional Drilling (HDD)",
              "Oil & Gas Pipelines",
              "Pipe rack structures",
              "Structure cross overs",
              "Storage Tanks",
              "Flue Gas Desulfurization (FGD)",
              "Separation and treating facilities",
              "Process pipelines",
              "Fire water network",
            ].map((item, index) => (
              <div key={index} className="flex gap-2 items-center py-8 border-b-2 border-grayS">
                <div className="">

                  <Image
                    src="/assets/services/ul-circle.png"
                    alt={item.title}
                    width={32}
                    height={32}
                    className="cursor-pointer w-[22px] h-[22px]"
                  />

                </div>
                <div className="text">
                  <h3 className="custom-h4 font-sans font-light">{item}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HSE and Security Section */}
        <div className="container my-20 p-10 px-10 lg:px-30 w-full bg-darkgray sm:rounded-2xl">
          <h2 className="custom-h2 text-center w-full font-bold font-sans">
            HSE and Security
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-4">
            {[
              {
                title: "Participation",
                description:
                  "Involve all workers in the setup and actions of the program.",
              },
              {
                title: "Hazard Control",
                description:
                  "Select options for eliminating, preventing, or controlling hazards.",
              },
              {
                title: "Improvement",
                description:
                  "Periodically evaluate the effectiveness of hazard controls.",
              },
              {
                title: "Leadership",
                description:
                  "Management at all levels make safety a core value.",
              },
              {
                title: "Hazard Id",
                description:
                  "Initial and ongoing assessment of workplace hazards and risk.",
              },
              {
                title: "Education",
                description:
                  "Train workers to recognize hazards and carry out controls.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-between mb-10 w-full shadow-xl bg-white"
              >
                <div className="relative layer">
                  <Image
                    src="/assets/services/layer-hse-security.png"
                    alt={item.title}
                    width={1000}
                    height={600}
                    className="cursor-pointer object-cover"
                  />
                  <h4 className="custom-h4 font-sans font-bold text-white absolute top-4 left-4">
                    {item.title}
                  </h4>
                </div>
                <div className="content py-10 px-6 bg-white">
                  <h4 className="custom-h4 font-sans font-regular">
                    {item.description}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default services;
