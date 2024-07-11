// components/CareerPage.jsx
"use client";

import React from "react";
import Image from "next/image"; // Import next/image component
import Link from "next/link";

const CareerPage = () => {
  return (
    <>
      <div className="w-full">
        <div className="career-page banner">
          <Image
            src="/assets/careers/career-layer.png"
            alt="tag"
            width={1000}
            height={600}
            className="w-full h-[65svh] relative"
          />

          <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  w-[90%] lg:w-[60%]">
            <h6 className="custom-h6 font-sans text-center font-bold text-blue">
              Careers
            </h6>
            <h1 className="custom-h1 pt-4 font-sans font-bold text-center text-blue">
              We&quot;re committed to bringing world-class,{" "}
              <span className="text-green"> passionate</span> professionals
              together to push new boundaries.
            </h1>
          </div>
        </div>

        <div className="mt-20 container w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-gray py-2 px-2 flex justify-between flex-col gap-6">
            <div className="jd-image relative overflow-hidden">
              <Image
                src="/assets/careers/jd-piping.jpeg"
                alt="tag"
                width={1000}
                height={600}
                className="w-full h-[200px] object-cover transition-transform duration-1000 transform scale-100 hover:scale-110"
              />
            </div>
            <div className="job-title-div">
              <Link href="/piping-design-engineer">
                <h3 className="custom-h4 pt-2 font-sans font-bold  text-blue">
                  Piping Design Engineer
                </h3>
              </Link>
              <div className="flex gap-4 pt-4">
                <Image
                  src="/assets/location-icon.svg"
                  alt="tag"
                  width={16}
                  height={16}
                  className=""
                />
                <h4 className="custom-h5 text-blue font-sans">
                  Gurgaon/Chennai, India
                </h4>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex gap-2 items-center">
                <Link href="/piping-design-engineer">
                  <div className="flex gap-4 items-center">
                    <h4 className="custom-h5 text-blue font-sans font-semibold">
                      Apply Job
                    </h4>

                    <Image
                      src="/assets/careers/career-arrow.svg"
                      alt="tag"
                      width={32}
                      height={32}
                      className="w-auto h-auto"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-gray border py-2 px-2 flex flex-col  justify-between">
            <div className="jd-image relative overflow-hidden">
              <Image
                src="/assets/careers/project-site.jpeg"
                alt="tag"
                width={1000}
                height={600}
                className="w-full h-[200px] object-cover transition-transform duration-1000 transform scale-100 hover:scale-110"
              />
            </div>
            <div className="job-title-div">
              <Link href="/project-site-engineer">
                <h3 className="custom-h4 pt-4 font-sans font-bold  text-blue">
                  Project Site Engineer
                </h3>
              </Link>
              <div className="flex gap-4 pt-4">
                <Image
                  src="/assets/location-icon.svg"
                  alt="tag"
                  width={16}
                  height={16}
                  className=""
                />
                <h4 className="custom-h5 text-blue font-sans">
                  Gurgaon/Chennai, India
                </h4>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex gap-2 items-center">
                <Link href="/project-site-engineer">
                <div className="flex gap-4 items-center">
                    <h4 className="custom-h5 text-blue font-sans font-semibold">
                      Apply Job
                    </h4>

                    <Image
                      src="/assets/careers/career-arrow.svg"
                      alt="tag"
                      width={32}
                      height={32}
                      className="w-auto h-auto"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-gray border py-2 px-2 flex flex-col  justify-between">
            <div className="jd-image relative overflow-hidden">
              <Image
                src="/assets/careers/ibr-welder-jd.jpg"
                alt="tag"
                width={1000}
                height={600}
                className="w-full h-[200px] object-cover transition-transform duration-1000 transform scale-100 hover:scale-110"
              />
            </div>
            <div className="job-title-div">
              <Link href="/ibr-welder">
                <h3 className="custom-h4 pt-2 font-sans font-bold  text-blue">
                  IBR Welder
                </h3>
              </Link>
              <div className="flex gap-4 pt-2">
                <Image
                  src="/assets/location-icon.svg"
                  alt="tag"
                  width={16}
                  height={16}
                  className=""
                />
                <h4 className="custom-h5 text-blue font-sans">
                  Chennai, India
                </h4>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex gap-2 items-center">
                <Link href="/ibr-welder">
                <div className="flex gap-4 items-center ">
                    <h4 className="custom-h5 text-blue font-sans font-semibold">
                      Apply Job
                    </h4>

                    <Image
                      src="/assets/careers/career-arrow.svg"
                      alt="tag"
                      width={32}
                      height={32}
                      className="w-auto h-auto"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerPage;
