"use client";

import ImageSlider from "@/components/ImageSlider";
import Industry from "@/components/Industry/Industry";
import PressRelease from "@/components/press-release/PressRelease";
import RecentProject from "@/components/recent-project/RecentProject";
import HomeServices from "@/components/services/Services";
import Image from "next/image";
import ValuableCustomer from "./customer/page";
import Link from "next/link";
import CookieConsent from "@/components/CookieConsent";
import MiddleBanner from "@/app/middle-banner/page";

const images = [
  {
    url: "/assets/banners/new-banner-01.png",
    heading: `Southern Engineering Partners with Olam Agri for 300KLPD Grain Based Ethanol Plant`,
    redirectUrl: "/projects",
    buttonText: "Read More", // Button text for the first image
  },
  {
    url: "/assets/banners/new-banner-02.jpeg",
    heading: "Design, Fabrication & Installation of High Pressure Piping",
    redirectUrl: "/services",
    buttonText: "Read More", // Button text for the second image
  },
  {
    url: "/assets/banners/new-banner-03.png",
    heading: "Design, Fabrication & Installation of Tanks and Structures",
    redirectUrl: "/services",
    buttonText: "Read More", // Button text for the third image
  },
];

export default function Home() {
  return (
    <main className="">
      <ImageSlider images={images} />

      {/* <div className=" container grid grid-cols-1 mt-10 md:grid-cols-1 lg:grid-cols-2 gap-4">

          <RecentProject />

          <Industry />

      </div> */}
      
{/* <CookieConsent /> */}
      <div className=" container services my-20">
        <HomeServices />
      </div>

      <div className="middle-banner bg-green">
        <MiddleBanner />
      </div>

      <div className="customer py-20 bg-lightgray">
        <ValuableCustomer />
      </div>
    </main>
  );
}
