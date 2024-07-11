"use client";

import React from "react";
import Image from "next/image"; // Import next/image component
import Link from "next/link";

const projectSite = () => {
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
              Project Site Engineer
            </h1>
          </div>
        </div>

        <div className="detailing mt-20 mb-20 px-6 lg:px-4">
          <div className="container flex flex-col gap-16">
            <div className="about-job">
              <h3 className="custom-h3 font-sans font-bold">About the Job</h3>

              <h5 className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-6">
                We are seeking a highly skilled and experienced Project Site
                Engineer with 5-15 years experience to join our team for an EPC
                project focused on piping, tanks, and structures. The
                responsibilities are as below:
              </h5>
            </div>

            <div className="key">
              <h3 className="custom-h3 font-sans font-bold">
                Key Responsibilities:
              </h3>
              <div className="flex flex-row  flex-wrap lg:flex-nowrap gap-12">
                <ul className=" w-full lg:w-[60%] m-0 p-0 list-inside list-disc">
                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Responsible for mechanical works such as equipment erection
                    and piping.
                  </li>

                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Supervised contractors&quot; personnel in the field and during
                    prefabrication.
                  </li>

                  <li className="custom-h4 font-sans font-regular lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Ensured compliance with HSE standards and regulations.
                  </li>

                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Monitored work activities to ensure full compliance with
                    work permits and to identify unsafe conditions or actions.
                  </li>

                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Reported all safety observations and corrective measures.
                  </li>

                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Ensured compliance with project standards and
                    specifications.
                  </li>

                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Knowledgeable in rigging plans and work methodology.
                  </li>

                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Tracked work progress, comparing planned versus actual
                    figures.
                  </li>

                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Followed up on installed quantities and maintained records
                    of quantity changes concerning the BOQ, informing the client
                    for necessary amendments.
                  </li>

                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Identified and reported problems and deficiencies in work
                    quality.
                  </li>

                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Monitored contractor personnel&quot;s planned versus actual
                    performance.
                  </li>

                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Compiled and followed up on punch item lists.
                  </li>

                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Logged and filed all necessary documents for daily work and
                    as-built records.
                  </li>

                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Checked and executed isometric drawings.
                  </li>

                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Supervised corrosion protection systems.
                  </li>

                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Prepared test packs and materials for hydro tests.
                  </li>

                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Experienced in welding techniques, standards, and
                    documentation
                  </li>
                </ul>
                <Image
                  src="/assets/careers/project-site.jpeg"
                  alt="tag"
                  width={1000}
                  height={600}
                  className="w-full lg:w-[40%] max-h-[350px] relative object-cover"
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
                    Graduate degree in Mechanical Engineering with 3 to 10 years
                    of experience in piping layout conceptualization.
                  </li>

                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Thorough understanding of common equipment and the routing
                    of all major process and utility piping according to P&IDs
                    and project standards.
                  </li>

                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Proficiency in producing and checking common piping
                    deliverables including isometrics, piping GA&quot;s, tie-in
                    details, and plot plans.
                  </li>

                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Proficiency in any one of E3D/PDMS/S3D/AUTO CAD modeling
                    software is an added advantage.
                  </li>

                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Strong communication and interpersonal skills.
                  </li>

                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Ability to work in a fast-paced environment and manage
                    multiple projects simultaneously.
                  </li>

                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Strong analytical skills and the ability to make data-driven
                    decisions.
                  </li>

                  <li className="custom-h4 font-sans font-medium lg:leading-custom-36 leading-custom-28 pt-2 pl-5 -indent-5">
                    Passion for engineering and a desire to stay current with
                    industry trends and best practices.
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

export default projectSite;
