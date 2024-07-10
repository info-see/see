import ContactForm from "@/components/ContactForm";
import React from "react";
import Image from "next/image";

const contact = () => {
  return (
    <>
      <div className="w-full mt-20">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-20 p-10">
          <div className="py-4">
            <ContactForm />
          </div>
          <div className="flex flex-col items-center min-w-full pt-4 lg:pt-20">
            <Image
              src="/assets/contact/contact-new.jpeg"
              alt="contact-us-image"
              width={580}
              height={580}
              priority
            />
          </div>
        </div>

        <div className="w-full h-auto py-20">
          <div className="flex flex-col gap-20 container">
            <div className="office grid grid-cols-1 gap-20 ">
              <div className="heading flex gap-12 flex-col">
                <div className="item">
                  <h3 className="custom-h5 font-sans font-medium tracking-custom-wide">
                    Office
                  </h3>
                  <h4 className="custom-h4 font-sans font-bold">
                    Chennai, Tamil Nadu, India
                  </h4>
                </div>
                <div className="flex gap-10 lg:gap-20  flex-col lg:flex-row">
                  <Image
                    src="/assets/contact/chennai.jpg"
                    alt="chennai office"
                    width={1000}
                    height={600}
                    priority
                    className="object-cover w-[350px] h-[250px]"
                  />

                  <div className="flex flex-col gap-10">
                    <div className="div">
                      <h3 className="custom-h5 font-sans font-medium tracking-custom-wide">
                        3rd Floor, Lancor Westminster
                        <br />
                        108, Dr Radha Krishnan Salai, Mylapore
                        <br />
                        Chennai, Tamil Nadu. 600004, India
                        <br />
                        +91-44-48513505
                        <br />
                        +91-44-24349107
                      </h3>
                    </div>

                    <div className="div">
                      <h3 className="custom-h5 font-sans font-medium tracking-custom-wide">
                        566 Anna Salai, Teynampet
                        <br />
                        Chennai, Tamil Nadu. 600018, India
                        <br />
                        +91-44-48513505
                        <br />
                        +91-44-24349107
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="office grid grid-cols-1 gap-20">
              <div className="heading flex gap-12 flex-col">
                <div className="item">
                  <h3 className="custom-h5 font-sans font-medium tracking-custom-wide ">
                    Office
                  </h3>
                  <h4 className="custom-h4 font-sans font-bold tracking-custom-wide">
                    Gurgaon, Haryana. India
                  </h4>
                </div>
                <div className="flex gap-10 lg:gap-20  flex-col lg:flex-row">
                  <Image
                    src="/assets/contact/gurgaon.png"
                    alt="chennai office"
                    width={1000}
                    height={600}
                    priority
                    className="object-cover w-[350px] h-[250px]"
                  />

                  <div className="div flex-col gap-10">
                    <h3 className="custom-h5 font-sans font-medium tracking-custom-wide">
                      2nd Floor, MPD Tower, Golf Course Rd, Sector 43,
                      <br />
                      Gurugram, Haryana. 122002
                      <br />
                      India
                      <br />
                      +91-9910267209
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="office grid grid-cols-1 gap-20">
              <div className="heading flex flex-col gap-12">
              <div className="item">
                <h3 className="custom-h5 font-sans font-medium tracking-custom-wide">
                  Workshops
                </h3>
                <h4 className="custom-h4 font-sans font-bold tracking-custom-wide">
                  Tamil Nadu. India
                </h4>
                </div>
                <div className="flex gap-10 lg:gap-20  flex-col lg:flex-row">
                  <Image
                    src="/assets/contact/workshop.png"
                    alt="Workshops"
                    width={1000}
                    height={600}
                    priority
                    className="object-cover w-[350px] h-[250px]"
                  />

                  <div className="flex flex-col gap-10">
                    <div className="workshops w-full">
                      <h4 className="custom-h4 font-sans font-bold tracking-custom-wide">
                        Workshop 1
                      </h4>
                      <div className="div w-full ">
                        <h3 className="custom-h5 font-sans font-medium tracking-custom-wide">
                          No. 10, Vivekanand Street, Balaji Nagar,
                          <br />
                          Ambattur, Chennai. Tamil Nadu. 600053. India
                        </h3>
                      </div>
                    </div>

                    <div className="workshops w-full">
                      <h4 className="custom-h4 font-sans font-bold tracking-custom-wide ">
                        Workshop 2
                      </h4>
                      <div className="div w-full ">
                        <h3 className="custom-h5 font-sans font-medium tracking-custom-wide ">
                          Survey No.91, Mylapore Village, Devandhavakkam Post,
                          <br />
                          Poondi, Thiruvallur to Utthukottai High Road,
                          Utthukottai Taluk, <br />
                          Thiruvallur District. Tamil Nadu. 602023. India
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
