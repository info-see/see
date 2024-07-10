// components/JobDetail.js

"use client";

import React from "react";
import Image from "next/image";

const JobDetail = ({ jobTitle, aboutJob, keyResponsibilities, aboutYou, contactEmail, additionalDetails }) => {
  return (
    <>
      <div className="w-full mt-20">
        <div className="career-page banner">
          <Image
            src="/assets/career-layer.png"
            alt="tag"
            width={1000}
            height={600}
            className="w-full h-[70svh] relative"
          />
          <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[80%]">
            <h6 className="custom-h6 font-sans text-center font-bold text-blue">Careers</h6>
            <h1 className="custom-h1 pt-4 font-sans font-bold text-center text-blue">{jobTitle}</h1>
          </div>
        </div>
        <div className="detailing m-20">
          <div className="container flex flex-col gap-16">
            <div className="about-job">
              <h3 className="custom-h3 font-sans font-bold">About the Job</h3>
              <h5 className="custom-h5 font-sans-font-medium lg:leading-custom-36 leading-custom-28 pt-6">{aboutJob}</h5>
            </div>
            <div className="key">
              <h3 className="custom-h3 font-sans font-bold">Key Responsibilities:</h3>
              <ul className="m-0 p-0 list-inside list-disc">
                {keyResponsibilities.map((responsibility, index) => (
                  <li key={index} className="custom-h5 font-sans-font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">{responsibility}</li>
                ))}
              </ul>
            </div>
            <div className="about-you">
              <h3 className="custom-h3 font-sans font-bold">About You</h3>
              <h5 className="custom-h5 font-sans-font-medium lg:leading-custom-36 leading-custom-28 pt-2">{aboutYou}</h5>
              <div className="points px-4">
                <ul className="m-0 p-0 list-inside list-disc">
                  {additionalDetails.map((detail, index) => (
                    <li key={index} className="custom-h5 font-sans-font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">{detail}</li>
                  ))}
                </ul>
              </div>
              <h5 className="custom-h5 font-sans-font-medium lg:leading-custom-36 leading-custom-28 pt-6">
                If you are interested, please share your CV with Abhishek Pandey at{" "}
                <a href={`mailto:${contactEmail}`} className="text-blue font-bold underline">{contactEmail}</a>, along with the following details:
              </h5>
              <ul className="m-0 px-4 list-inside list-disc">
                <li className="custom-h5 font-sans-font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">Current CTC:</li>
                <li className="custom-h5 font-sans-font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">Expected CTC:</li>
                <li className="custom-h5 font-sans-font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">Notice Period:</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetail;
