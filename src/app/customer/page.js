import React from "react";
import Image from "next/image";
import styles from "./ValuableCustomer.module.css";

const customerImages = [
  { src: "/assets/customer/avadh.png", alt: "Customer Avadh" },
  { src: "/assets/customer/birlasuger1.png", alt: "Customer Birlasuger" },
  { src: "/assets/customer/parrys-logo.png", alt: "Customer Parrys" },
  { src: "/assets/customer/rajshree.png", alt: "Customer Rajshree" },
  { src: "/assets/customer/renuka.png", alt: "Customer Renuka" },
  { src: "/assets/customer/zuari.png", alt: "Customer Zuari" },
  { src: "/assets/customer/jk.png", alt: "Customer JK" },
  { src: "/assets/customer/tnpl.png", alt: "Customer TNPL" },
  { src: "/assets/customer/bilt.png", alt: "Customer BILT" },
  { src: "/assets/customer/itc.png", alt: "Customer ITC" },
  { src: "/assets/customer/seshasayee.png", alt: "Customer Seshasayee" },
  { src: "/assets/customer/dalmia-bharat-group-vector-logo.png", alt: "Customer Dalmia" },
  { src: "/assets/customer/aurobindo.jpg", alt: "Customer Aurobindo" },
  { src: "/assets/customer/olam.png", alt: "Customer Olam" },
  { src: "/assets/customer/lt.png", alt: "Customer L&T" },
  { src: "/assets/customer/Triveni.jpg", alt: "Customer Triveni" },
  { src: "/assets/customer/shreyas.png", alt: "Customer Shreyas" },
  { src: "/assets/customer/rana.jpg", alt: "Customer Rana" },
  { src: "/assets/customer/emami-group.jpg", alt: "Customer Emami" },
  { src: "/assets/customer/ankur.png", alt: "Customer Ankur" },
  { src: "/assets/customer/parle.png", alt: "Customer Parle" },
  { src: "/assets/customer/kaka.png", alt: "Customer Kaka" },
  { src: "/assets/customer/balrampur.png", alt: "Customer Balrampur" },
  { src: "/assets/customer/algavista.png", alt: "Customer Algavista" },
];

const ValuableCustomer = () => {
  // console.log(customerImages);

  return (
    <>
      <div className="w-full h-auto container">
        <div className="bg-image flex items-center flex-col">
          <h1 className="font-sans text-black font-bold custom-h1 text-center w-full">
            Representative Customers
          </h1>
        </div>
      </div>

      <div className="mt-20 w-full container">
        <div className="flex flex-col items-center justify-center gap-20">
          <div className={styles.container}>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center gap-8">
              {customerImages.map((image, index) => (
                <div className="flex items-center justify-center" key={index}>
                  <div className="m-auto">
                    <Image
                      src={`${image.src}?v=${new Date().getTime()}`}
                      alt={image.alt}
                      width={112}
                      height={112}
                      className="cursor-pointer max-w-[120px] max-h-[120px] w-auto object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ValuableCustomer;
