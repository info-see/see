"use client";

import { useState } from "react";
import SuccessPopup from "./SuccessPopup";
import { toast, Toaster } from "react-hot-toast";
import Loader from "./Loader"; // Import the Loader component

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [comments, setComments] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          email,
          companyName,
          phoneNumber,
          comments,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setShowSuccessPopup(true);
        setFullname("");
        setEmail("");
        setCompanyName("");
        setPhoneNumber("");
        setComments("");
      } else {
        toast.error(data.msg.join(", "));
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleClosePopup = () => {
    setShowSuccessPopup(false);
  };

  return (
    <section className="bg-white">
      <Toaster />
      {loading && <Loader />} {/* Render the loader if loading is true */}
      {showSuccessPopup && <SuccessPopup onClose={handleClosePopup} />}
      <div className="">
        <h2 className="mb-4 font-sans text-xl 2xl:text-6xl lg:text-5xl md:text-4xl sm:text-2xl tracking-tight font-bold dark:text-white">
          Let's Collaborate!
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8 mt-8">
          <div>
            <label
              htmlFor="fullname"
              className="block mb-2 text-sm font-medium 2xl:text-lg lg:text-base md:text-sm dark:text-gray-300"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              className="shadow-sm bg-gray-50 border border-gray-300 text-sm font-sans focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="John Doe"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 2xl:text-lg lg:text-base md:text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-sm font-sans focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="companyName"
              className="block mb-2 2xl:text-lg lg:text-base md:text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              className="shadow-sm bg-gray-50 border border-gray-300 text-sm font-sans focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block mb-2 2xl:text-lg lg:text-base md:text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="shadow-sm bg-gray-50 border border-gray-300 text-sm font-sans focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="comments"
              className="block mb-2 2xl:text-lg lg:text-base md:text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Comments
            </label>
            <textarea
              id="comments"
              rows="6"
              className="shadow-sm bg-gray-50 border border-gray-300 text-sm font-sans focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Leave a comment..."
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 font-bold text-white rounded-lg bg-green hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
