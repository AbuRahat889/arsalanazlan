"use client";

import Image from "next/image";
import React, { useState } from "react";
import porviderProfile from "@/assets/details.png";
import { useRouter } from "next/navigation";

export default function CourseDetails() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    message: "",
  });
  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };
  return (
    <div className="bg-[linear-gradient(96deg,#3B64A0_4.91%,#A07214_131.45%)] ">
      <div className="container mx-auto p-5 md:p-8">
        <button
          onClick={() => router.back()}
          className="mb-8 bg-white text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          Back to CPD Providers
        </button>
        {/* Provider Details */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="shrink-0 h-auto md:h-56 w-full md:w-56">
            <Image
              src={porviderProfile}
              alt="Provider Profile"
              height={400}
              width={600}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="space-y-5">
            <p className="text-2xl md:text-5xl text-white font-semibold leading-6">
              Computeam
            </p>
            <p className="text-sm text-white font-normal leading-6">
              CPD Provider No: 18484
            </p>
            <p className="text-sm text-white font-normal leading-6">
              Improving Education using Technology
            </p>
            <p className="text-sm md:text-base text-white font-normal leading-6">
              Computeam is an organisation that provides IT products and
              services to schools and Multi Academy Trusts (MATs) across the UK,
              with the aim of improving educational outcomes through technology.
              Computeam offers a range of solutions to engage, connect, secure
              and manage IT in classrooms, such as audio-visual systems,
              wireless and network solutions, data and cyber security, cloud
              solutions, and more. Computeam also provides training and support
              for teachers and staff to use technology effectively and safely in
              their teaching and learning. Computeam has a team of experts and
              partners who work with hundreds of schools to deliver high-quality
              IT solutions and support. 
            </p>

            <div className="flex items-center gap-4">
              <button className="bg-white text-textColor px-4 py-2 rounded-md text-sm font-medium hover:bg-primaryColor transition-colors">
                Visit website
              </button>
              {/* Social Icons */}
              <div className="flex gap-3">
                {/* Facebook */}
                <div className="w-8 h-8  rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                  >
                    <path
                      d="M32.6699 16C32.6699 7.1625 25.5074 0 16.6699 0C7.83242 0 0.669922 7.1625 0.669922 16C0.669922 23.5 5.83867 29.8 12.8074 31.5312V20.8875H9.50742V16H12.8074V13.8938C12.8074 8.45 15.2699 5.925 20.6199 5.925C21.6324 5.925 23.3824 6.125 24.1012 6.325V10.75C23.7262 10.7125 23.0699 10.6875 22.2512 10.6875C19.6262 10.6875 18.6137 11.6812 18.6137 14.2625V16H23.8387L22.9387 20.8875H18.6074V31.8813C26.5324 30.925 32.6699 24.1812 32.6699 16Z"
                      fill="white"
                    />
                  </svg>
                </div>

                {/* X/Twitter */}
                <div className="w-8 h-8  rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                  >
                    <path
                      d="M24.9957 3H29.4082L19.7707 14.0125L31.1082 29H22.2332L15.277 19.9125L7.32695 29H2.9082L13.2145 17.2188L2.3457 3H11.4457L17.727 11.3062L24.9957 3ZM23.4457 26.3625H25.8895L10.1145 5.5H7.48945L23.4457 26.3625Z"
                      fill="white"
                    />
                  </svg>
                </div>

                {/* LinkedIn */}
                <div className="w-8 h-8  rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                  >
                    <path
                      d="M8.93867 28H3.13242V9.30625H8.93867V28ZM6.03242 6.75625C4.17617 6.75625 2.66992 5.21875 2.66992 3.3625C2.66992 2.47071 3.02418 1.61544 3.65478 0.984853C4.28537 0.354262 5.14063 0 6.03242 0C6.92421 0 7.77948 0.354262 8.41007 0.984853C9.04066 1.61544 9.39492 2.47071 9.39492 3.3625C9.39492 5.21875 7.88867 6.75625 6.03242 6.75625ZM30.6637 28H24.8699V18.9C24.8699 16.7312 24.8262 13.95 21.8512 13.95C18.8324 13.95 18.3699 16.3062 18.3699 18.7437V28H12.5699V9.30625H18.1387V11.8562H18.2199C18.9949 10.3875 20.8887 8.8375 23.7137 8.8375C29.5887 8.8375 30.6699 12.7063 30.6699 17.7313V28H30.6637Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="text-white mt-14">
          <p className="text-2xl font-bold mb-6">Receive more information</p>

          <form onSubmit={handleSubmit} className="">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 w-full">
              <div className="shrink-0 grid md:grid-cols-1 gap-3 w-full md:w-2/5">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-md bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-md bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                />

                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Contact number"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-md bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              <textarea
                name="message"
                placeholder="Message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-md bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-primaryColor mt-6 text-white px-8 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
