"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileScrolled, setMobileScrolled] = useState(false);
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [nav, setNav] = useState(false);
  const [menuTransition, setMenuTransition] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setScrolled(scrollPosition > windowHeight * 0.1);

      if (isMobile) {
        setMobileScrolled(scrollPosition > 0);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Adjust the breakpoint as needed
    };

    handleScroll(); // Initial check on mount
    handleResize(); // Initial check on mount

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const links = [
    { id: 1, link: "home", url: "/" },
    { id: 2, link: "about us", url: "/about" },
    { id: 3, link: "services", url: "/services" },
    { id: 4, link: "projects", url: "/projects" },
    { id: 5, link: "careers", url: "/careers" },
    { id: 6, link: "contact", url: "/contact" },
  ];

  const toggleNav = () => {
    setMenuTransition(true);
    setNav(!nav);
  };

  return (
    <div
      className={`header z-50 fixed top-0 left-0 w-full transition-all duration-300 ${
        pathname === "/careers" ||
        pathname === "/contact" ||
        pathname === "/piping-design-engineer" ||
        pathname === "/project-site-engineer" ||
        pathname === "/ibr-welder"
          ? "bg-white shadow-lg"
          : scrolled
          ? "bg-white shadow-xl"
          : "bg-none"
      }`}
    >
      <div className="container flex justify-between items-center h-[100px]">
        <div>
          <h1 className="text-5xl font-sans ml-2">
            <Link href="/">
              <Image
                src={
                  pathname === "/careers" ||
                  pathname === "/contact" ||
                  pathname === "/piping-design-engineer" ||
                  pathname === "/project-site-engineer" ||
                  pathname === "/ibr-welder"
                    ? "/assets/logo/see-logo.png"
                    : scrolled
                    ? "/assets/logo/see-logo.png"
                    : "/assets/logo/white-see-logo.png"
                }
                alt="Logo"
                width={90}
                height={90}
                className="w-auto cursor-pointer h-auto"
              />
            </Link>
          </h1>
        </div>

        <ul className="hidden lg:flex space-x-6 xl:space-x-12">
          {links.map(({ id, link, url }) => (
            <Link key={id} href={url} className="p-0 m-0">
              <li
                className={`font-sans custom-h5 font-medium nav-links px-4 cursor-pointer capitalize hover:scale-105 hover:font-bold hover:text-green duration-200 link-underline  ${
                  pathname === "/careers" ||
                  pathname === "/contact" ||
                  pathname === "/piping-design-engineer" ||
                  pathname === "/project-site-engineer" ||
                  pathname === "/ibr-welder"
                    ? "text-black"
                    : scrolled
                    ? "text-black"
                    : "text-white hover:text-white"
                }`}
              >
                {link}
              </li>
            </Link>
          ))}
        </ul>

        <div
          onClick={toggleNav}
          className="cursor-pointer pr-4 z-10 lg:hidden flex items-center gap-4"
        >
          {nav ? (
            <>
              {/* <Image
                src="/assets/see-logo.png"
                alt="see-logo"
                width={90}
                height={90}
                className="w-auto h-auto"
              />
              <Image
                src="/assets/close-icon.png"
                alt="Close Icon"
                width={30}
                height={30}
                className="w-auto h-auto"
              /> */}
            </>
          ) : (
            <Image
              src={
                pathname === "/careers" ||
                pathname === "/contact" ||
                pathname === "/piping-design-engineer" ||
                pathname === "/project-site-engineer" ||
                pathname === "/ibr-welder"
                  ? "/assets/icon-bar.png"
                  : mobileScrolled
                  ? "/assets/icon-bar.png"
                  : "/assets/white-bar.png"
              }
              alt="Menu Icon"
              width={30}
              height={30}
              className="w-auto h-auto"
            />
          )}
        </div>

        <ul
          className={`flex flex-col  items-center absolute top-0 left-0 w-full h-screen bg-white text-black transition-transform duration-300 ${
            nav
              ? "menu-enter-active"
              : menuTransition
              ? "menu-exit-active"
              : "menu-enter"
          }`}
        >
          <div className="flex justify-between h-[100px] items-center w-full px-6">
            <Image
              src="/assets/logo/see-logo.png"
              alt="see-logo"
              width={90}
              height={90}
              className="w-auto h-auto"
            />
            <Image
              src="/assets/close-icon.png"
              alt="Close Icon"
              width={30}
              height={30}
              className="w-auto h-auto cursor-pointer"
              onClick={toggleNav}
            />
          </div>
          <div className="pt-12">
          {links.map(({ id, link, url }) => (
            <Link key={id} href={url} onClick={toggleNav}>
              <li className="font-sans px-4 cursor-pointer capitalize py-6 custom-h3">
                {link}
              </li>
            </Link>
          ))}
          </div>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;
