"use client";

import React from "react";
import Image from "next/image"; // Import next/image component
import Link from "next/link";

const ibrWelder = () => {
  return (
    <>
      <div className="w-full mt-20">
        <div className="career-page banner">
          <Image
            src="/assets/careers/career-layer.png"
            alt="tag"
            width={1000}
            height={600}
            className="w-full h-[70svh] relative"
          />

          <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[80%]">
            <h6 className="custom-h6 font-sans text-center font-bold text-blue">
              Careers
            </h6>
            <h1 className="custom-h1 pt-4 font-sans font-bold text-center text-blue">
              IBR Welder
            </h1>
          </div>
        </div>

        <div className="detailing m-20 px-6 lg:px-4">
          <div className="container flex flex-col gap-16">
            <div className="about-job">
              <h3 className="custom-h3 font-sans font-bold">About the Job</h3>
              <h5 className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-6">
                Our company is seeking a highly skilled welder to join our
                dynamic team. We are looking for a dedicated professional who
                thrives on overcoming challenges and exceeding client
                expectations. Your primary responsibilities will include
                interpreting design plans, operating and monitoring machinery,
                and evaluating welded components.To succeed in this role, you
                should possess extensive knowledge of welding machinery and
                electrical equipment. The ideal candidate will have a steady
                hand and exceptional attention to detail.
              </h5>
            </div>

            <div className="key">
              <h3 className="custom-h3 font-sans font-bold">
                Key Responsibilities:
              </h3>

              <div className="flex flex-row  flex-wrap lg:flex-nowrap gap-12">
                <ul className="w-full lg:w-[60%] m-0 p-0 list-inside list-disc">
                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Interpret blueprints, drawings, and measurements to plan
                    layouts.
                  </li>

                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Weld various components, including copper plumbing, beams,
                    and pipelines.
                  </li>

                  <li className="custom-h4 font-sans font-regular lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Utilize specialized machinery for industrial welding and
                    oversee automated welding processes.
                  </li>

                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Maintain and repair all welding machinery.
                  </li>

                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Evaluate welded surfaces, structures, and components to
                    identify errors.
                  </li>

                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Adhere to and enforce strict safety regulations, such as
                    wearing heat-resistant gloves, protective masks, and safety
                    shoes.
                  </li>

                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Monitor machinery for proper use and temperature control.
                  </li>

                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Perform welding tasks in flat, vertical, and overhead
                    positions.
                  </li>
                </ul>

                <Image
                  src="/assets/careers/detail-services.png"
                  alt="tag"
                  width={1000}
                  height={600}
                  className="w-full lg:w-[40%] max-h-[350px] object-cover relative "
                />
              </div>
            </div>

            <div className="about-you">
              <h3 className="custom-h3 font-sans font-bold">About You</h3>
              <h5 className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2">
                We would love to hear from you if your profile meets the
                following essential requirements:
              </h5>

              <div className="points px-4">
                <ul className="m-0 p-0 list-inside list-disc">
                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    High school diploma or equivalent.
                  </li>

                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    A valid welding certificate from an accredited institution
                    is preferred.
                  </li>

                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    At least 2 years of experience as a welder.
                  </li>

                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Excellent knowledge of welding machinery, electrical
                    equipment, and manual tools.
                  </li>

                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Ability to read and interpret blueprints and designs.
                  </li>

                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Exceptional attention to detail.
                  </li>
                </ul>
              </div>

              <h5 className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-6">
                If you are interested, please share your CV 
                at{" "}
                <a
                  href="mailto:sb@southernengineering.co.in"
                  className="text-blue font-bold underline"
                >
                  sb@southernengineering.co.in
                </a>
                , along with the following details:
              </h5>
              <ul className="m-0 px-4 list-inside list-disc">
                <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2  pl-5 -indent-5">
                  Current CTC:
                </li>
                <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2  pl-5 -indent-5">
                  Expected CTC:
                </li>

                <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2  pl-5 -indent-5">
                  Notice Period:
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ibrWelder;
