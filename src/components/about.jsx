"use client";

import React from "react";
import Image from "next/image"; // Import next/image component
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <>
      <div className="relative w-full h-auto ">
        <Image
          src="/assets/about/about-ban.jpg"
          alt="about"
          width={1000}
          height={600}
          className="cursor-pointer w-full h-[75svh] object-cover"
        />
        <div className="absolute bottom left-1/2 lg:left-1/5 bg-white w-[80%] lg:max-w-[30%] mx-auto transform -translate-x-1/2 -translate-y-1/2 h-auto border-t-12 border-t-green custom-shadow">
          <h2 className="mt-4 ml-8 mr-20 2xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg font-source font-bold">
            About us
          </h2>
          <h4 className="my-6 custom-h4 font-sans font-regular ml-8 mr-12">
            We are a leading EPC organization with deep expertise in piping,
            tanks and structures across power and process industries.
          </h4>
        </div>

        <div className="container mt-40 px-10 lg:px-40 w-full">
          <h5 className="custom-h4 py-5 leading-custom-36 font-sans font-regular">
            Southern Engineering Erectors (SEE) is a leading global EPC
            (Engineering, Procurement, and Construction) company specializing in
            piping and related domains. With a robust presence in the sugar,
            paper, and hydrocarbon processing industries, the company has
            cemented its reputation both in India and internationally. Over the
            past 35 years, SEE has successfully executed more than 400 projects,
            demonstrating its expertise and commitment to engineering
            excellence.
          </h5>

          <h5 className="custom-h4 py-5 leading-custom-36 font-sans font-regular">
            SEE have worked on a diverse range of projects, from large-scale
            sugar refineries and advanced paper mills to complex hydrocarbon
            processing plants. This extensive experience has enabled SEE to
            develop cutting-edge technologies and innovative solutions tailored
            to the specific needs of these industries. SEE prides itself on its
            comprehensive service offerings, which include detailed engineering
            design, procurement of high-quality materials, and meticulous
            construction management. The company&quot;s team of skilled
            engineers and technicians ensures that every project is completed on
            time, within budget, and to the highest standards of quality and
            safety. With its unwavering commitment to engineering excellence and
            sustainability, SEE continues to be a trusted partner for clients
            worldwide.
          </h5>
        </div>

        <div className="container mt-20 w-full">
          <h1 className="custom-h1 font-sans font-bold text-green text-center">
            Our Core Team
          </h1>
          {/* <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
              <div className="flex flex-col items-center bg-white">
                <Image
                  src="/assets/teams/sk-new.png"
                  alt="tag"
                  width={240}
                  height={240}
                  className="rounded-full max-h-[240px] object-cover"
                />
                <h4 className="custom-h4 font-sans font-semibold mt-6">
                  SK Bhowmick
                </h4>
                <h5 className="custom-h5 font-sans font-light text-center w-[70%]">
                  Founder & MD <br />
                  50+ years experience
                </h5>
              </div>

              <div className="flex flex-col items-center">
                <Image
                  src="/assets/teams/team-2-new.png"
                  alt="tag"
                  width={240}
                  height={240}
                  className="rounded-full max-h-[240px]"
                />
                <h4 className="custom-h4 font-sans font-semibold mt-6">
                  Shantanu Bhowmick
                </h4>
                <h5 className="custom-h5 font-sans font-light text-center w-[70%]">
                  Executive Director <br />
                  25+ years experience
                </h5>
              </div>

              <div className="flex flex-col items-center justify-between">
                <Image
                  src="/assets/teams/team-3-new.png"
                  alt="tag"
                  width={240}
                  height={240}
                  className="rounded-full max-h-[240px] "
                />
                <h4 className="custom-h4 font-sans font-semibold mt-6">
                  Niti Jain
                </h4>
                <h5 className="custom-h5 font-sans font-light text-center w-[95%]">
                  Director, Business Development <br />
                  25+ years experience
                </h5>
              </div>

              <div className="flex flex-col items-center">
                <Image
                  src="/assets/teams/GRC.png"
                  alt="tag"
                  width={240}
                  height={240}
                  className="rounded-full max-h-[240px] "
                />
                <h4 className="custom-h4 font-sans font-semibold mt-6">
                  Gautam Roy Chowdhary
                </h4>
                <h5 className="custom-h5 font-sans font-light text-center w-[70%]">
                  Director, Design <br />
                  40+ years experience
                </h5>
              </div>

              <div className="flex flex-col items-center justify-between">
                <Image
                  src="/assets/teams/nim.png"
                  alt="tag"
                  width={240}
                  height={240}
                  className="rounded-full max-h-[240px]"
                />
                <h4 className="custom-h4 font-sans font-semibold mt-6">
                  Navrattan Nim
                </h4>
                <h5 className="custom-h5 font-sans font-light text-center w-[70%]">
                  Director, Projects <br />
                  30+ years experience
                </h5>
              </div>

              <div className="flex flex-col items-center justify-between">
                <Image
                  src="/assets/teams/Sinha-new.png"
                  alt="tag"
                  width={240}
                  height={240}
                  className="rounded-full"
                />
                <h4 className="custom-h4 font-sans font-semibold mt-6">
                  Avijit Sinha
                </h4>
                <h5 className="custom-h5 font-sans font-light text-center w-[70%]">
                  Sr. Project Manager <br />
                  30+ years experience
                </h5>
              </div>

              <div className="flex flex-col items-center justify-between">
                <Image
                  src="/assets/teams/raj-new.png"
                  alt="tag"
                  width={240}
                  height={240}
                  className="rounded-full max-h-[240px]"
                />
                <h4 className="custom-h4 font-sans font-semibold mt-6">
                  Raj Kumar
                </h4>
                <h5 className="custom-h5 font-sans font-light text-center w-[70%]">
                  Supply chain Manager <br />
                  10+ years experience
                </h5>
              </div>

              <div className="flex flex-col items-center justify-between">
                <Image
                  src="/assets/teams/animesh-deb-new.png"
                  alt="animesh-deb"
                  width={240}
                  height={240}
                  className="rounded-full max-h-[240px]"
                />
                <h4 className="custom-h4 font-sans font-semibold mt-6">
                  Animesh Deb
                </h4>
                <h5 className="custom-h5 font-sans font-light text-center w-[70%]">
                  Sr. Project Manager <br />
                  30+ years experience
                </h5>
              </div>
            </div>
          </div> */}

          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="flex flex-col gap-6">
                <Image
                  src="/assets/teams/sk-bhowmick.jpg"
                  alt="tag"
                  width={240}
                  height={240}
                  className="w-full max-h-[240px] object-cover"
                />
                <div className="name">
                  <h4 className="custom-h4 text-center font-sans font-semibold">
                    SK Bhowmick
                  </h4>
                  <h5 className="custom-h5 text-center font-sans font-light">
                    Founder & MD <br />
                    50+ years experience
                  </h5>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <Image
                  src="/assets/teams/sb-bhowmick.jpg"
                  alt="tag"
                  width={240}
                  height={240}
                  className="w-full object-full max-h-[240px]"
                />
                <div className="name">
                  <h4 className="custom-h4  text-center font-sans font-semibold">
                    Shantanu Bhowmick
                  </h4>
                  <h5 className="custom-h5 font-sans font-light text-center">
                    Executive Director <br />
                    25+ years experience
                  </h5>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <Image
                  src="/assets/teams/niti-jain.jpg"
                  alt="tag"
                  width={240}
                  height={240}
                  className="w-full object-cover max-h-[240px] "
                />
                <div className="name">
                  <h4 className="custom-h4 text-center font-sans font-semibold">
                    Niti Jain
                  </h4>
                  <h5 className="custom-h5 font-sans font-light text-center">
                    Director, Business Development <br />
                    25+ years experience
                  </h5>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <Image
                  src="/assets/teams/gr-chowdhary.jpg"
                  alt="tag"
                  width={240}
                  height={240}
                  className="w-full object-cover max-h-[240px] "
                />
                <div className="name">
                  <h4 className="custom-h4 font-sans font-semibold text-center">
                    Gautam Roy Chowdhary
                  </h4>
                  <h5 className="custom-h5 font-sans font-light text-center ">
                    Director, Design <br />
                    40+ years experience
                  </h5>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <Image
                  src="/assets/teams/navrattan-nim.jpg"
                  alt="tag"
                  width={240}
                  height={240}
                  className="w-full object-cover max-h-[240px]"
                />
                <div className="name">
                  <h4 className="custom-h4 font-sans font-semibold text-center">
                    Navrattan Nim
                  </h4>
                  <h5 className="custom-h5 font-sans font-light text-center ">
                    Director, Projects <br />
                    30+ years experience
                  </h5>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <Image
                  src="/assets/teams/avijit-sinha.jpg"
                  alt="tag"
                  width={240}
                  height={240}
                  className="w-full object-cover max-h-[240px] "
                />
                <div className="name">
                  <h4 className="custom-h4 font-sans font-semibold text-center">
                    Avijit Sinha
                  </h4>
                  <h5 className="custom-h5 font-sans font-light text-center">
                    Sr. Project Manager <br />
                    30+ years experience
                  </h5>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <Image
                  src="/assets/teams/raj-kumar.jpg"
                  alt="tag"
                  width={240}
                  height={240}
                  className="w-full object-cover max-h-[240px]"
                />
                <div className="name">
                  <h4 className="custom-h4 font-sans font-semibold text-center">
                    Raj Kumar
                  </h4>
                  <h5 className="custom-h5 font-sans font-light text-center">
                    Supply chain Manager <br />
                    10+ years experience
                  </h5>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <Image
                  src="/assets/teams/animesh-deb.jpg"
                  alt="animesh-deb"
                  width={240}
                  height={240}
                  className="w-full object-cover max-h-[240px]"
                />
                <div className="name">
                  <h4 className="custom-h4 font-sans font-semibold  text-center">
                    Animesh Deb
                  </h4>
                  <h5 className="custom-h5 font-sans font-light text-center">
                    Sr. Project Manager <br />
                    30+ years experience
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-20 w-full">
          <h1 className="custom-h1 font-sans font-bold text-green text-center">
            Our Core Principles
          </h1>
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="w-full order-1 lg:order-[-1]">
              <Image
                src="/assets/about/value.png"
                alt="core-principle"
                width={1000}
                height={600}
                className="cursor-pointer w-full h-full object-contain"
              />
            </div>

            <div className="text order-[-1] lg:order[2]">
              <h4 className="custom-h4 font-sans font-bold">
                Valuing Integrity, Compliance and Ethics:
              </h4>

              <h5 className="custom-h6 my-5 font-mont font-regular leading-custom-28 line-">
                At our company, integrity, compliance, and ethics are not just
                corporate buzzwords—they are fundamental to our identity and
                ingrained in our DNA. We believe that conducting business with
                the highest ethical standards is crucial for long-term success
                and trust-building with our stakeholders. Our commitment to
                these principles is evident in every aspect of our operations,
                from decision-making processes to daily interactions with
                employees, clients, and partners.
              </h5>

              <h5 className="custom-h6 my-5 font-mont font-regular leading-custom-28">
                Our comprehensive compliance and ethics program reflects this
                commitment. It includes rigorous policies and procedures,
                thorough risk assessments, continuous training, and open
                channels for communication and reporting. Leadership plays a
                pivotal role in setting the tone from the top, ensuring that
                ethical behavior is modeled and reinforced at all levels of the
                organization.
              </h5>
            </div>

            <div className="text order-[1] lg:order[2]">
              <h5 className="custom-h6 my-5 font-mont font-regular leading-custom-28">
                We prioritize transparency and accountability, encouraging our
                employees and partners to uphold these values and report any
                concerns without fear of retribution. This proactive approach
                allows us to identify and mitigate risks promptly, maintaining a
                culture of integrity that transcends legal requirements and
                industry standards.
              </h5>

              <h5 className="custom-h6 my-5 font-mont font-regular leading-custom-28">
                By benchmarking against best practices and continually refining
                our strategies, we ensure our compliance and ethics program
                remains robust and effective. Our unwavering dedication to these
                principles not only safeguards our reputation but also fosters a
                sustainable and ethical business environment.
              </h5>
            </div>

            <div className="w-full order-2 lg:order-[1]">
              <Image
                src="/assets/about/ethics.png"
                alt="core-principle"
                width={1000}
                height={600}
                className="cursor-pointer w-full h-full object-contain"
              />
            </div>
          </div>

          {/* <div
            className="extra-content w-full"
          >

          </div> */}

          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="text">
              <h4 className="custom-h4 font-sans font-bold">
                Diversity, Equity & Inclusion:
              </h4>

              <h5 className="custom-h6 my-5 font-mont font-regular leading-custom-28">
                Our people are the driving force behind our future. That&quot;s
                why we are dedicated to fostering and maintaining a global
                culture of diversity, equity, and inclusion. We celebrate the
                unique individuals and perspectives that define us, embracing
                their authentic abilities and supporting their career growth and
                achievements.
              </h5>

              <h5 className="custom-h6 my-5 font-mont font-regular leading-custom-28">
                Our DE&I program aims to enhance the demographic diversity of
                our workforce and business partnerships. By promoting equity and
                workplace inclusion, we harness the power of our diverse team to
                boost organizational performance and achieve positive business
                outcomes.
              </h5>

              <h5 className="custom-h6 my-5 font-mont font-regular leading-custom-28">
                At SEE, everyone has a part to play in nurturing a culture of
                inclusion. We value and embrace diversity, welcome different
                viewpoints, and encourage employees to openly discuss
                challenging issues at work, in alignment with our One Team
                value.
              </h5>
            </div>

            <div className="w-full">
              <Image
                src="/assets/about/diversity.png"
                alt="core-principle"
                width={1000}
                height={600}
                className="cursor-pointer w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="w-full order-2 md:order-1">
              <Image
                src="/assets/about/culture-01.png"
                alt="core-principle"
                width={1000}
                height={600}
                className="cursor-pointer w-full h-full object-contain"
              />
            </div>

            <div className="text">
              <h4 className="custom-h4 font-sans font-bold">
                Culture of Continuous Learning:
              </h4>

              <h5 className="custom-h6 my-5 font-mont leading-custom-28 font-regular">
                At SEE, a culture of continuous learning is deeply embedded in
                our DNA, driving innovation and excellence. We believe that
                fostering an environment where learning is not just encouraged
                but expected, is crucial to our long-term success and the
                personal growth of our employees. This commitment is reflected
                in our comprehensive learning and development programs designed
                to support every stage of our employees&quot; careers.
              </h5>

              <h5 className="custom-h6 my-5 font-mont leading-custom-28 font-regular">
                From the moment someone joins our team, they are introduced to a
                variety of training modules, mentorship opportunities, and
                professional development resources. We offer a blend of
                on-the-job learning, formal education, and collaborative
                projects to ensure our employees are constantly acquiring new
                skills and knowledge.
              </h5>
              <h5 className="custom-h6 my-5 font-mont leading-custom-28 font-regular">
                By prioritizing continuous learning, we empower our employees to
                innovate, adapt, and excel in their roles. This not only
                enhances individual performance but also drives the collective
                success of our company, ensuring we remain at the forefront of
                our industry.
              </h5>
            </div>
          </div>
          {/* <div
            className="extra-content w-full"

          >

          </div> */}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
