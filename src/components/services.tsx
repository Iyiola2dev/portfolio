"use client";
import React from "react";

import { TbSeo } from "react-icons/tb";
import { FaVideo } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { SiXdadevelopers } from "react-icons/si";

interface ServicesProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const Services = () => {
  const services: ServicesProps[] = [
    {
      title: "Web Development",
      description: "Building responsive and functional websites.",
      icon: <SiXdadevelopers />,
    },
    {
      title: "SEO Optimization",
      description: "Improving website visibility on search engines.",
      icon: <TbSeo />,
    },
    {
      title: "Content Creation",
      description: "Creating engaging content for various platforms.",
      icon: <FaVideo />,
    },
    {
      title: "Web App Development",
      description: "Building dynamic web applications.",
      icon: <MdDeveloperMode />,
    },
  ];

  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo text-gray-700">
        What I Offer
      </h4>
      <h2 className="text-center text-5xl font-ovo text-gray-700">
        My Services
      </h2>
      <p className="mb-10 max-w-2xl mx-auto font-ovo text-lg text-gray-700 text-center">
        I provide a range of services to help you achieve your goals.
      </p>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {services.map(({ icon, title, description }, index) => (
          <li
            key={index}
            className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 shadow-[5px_5px_0px_0px_#000] hover:shadow-none"
          >
            {icon}

            <h5 className="font-ovo my-4 font-semibold text-gray-700">
              {title}
            </h5>
            <p className="text-sm text-gray-600">{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
