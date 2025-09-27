"use client";

import React, { useState } from "react";
import Image from "next/image";
// import my_pic from "../assets/my_pic.png";
import { infoList, toolsData } from "@/assets/assets2/assets";
import { cn } from "@/lib";

export const About = () => {
  const [isPaused, setIsPaused] = useState(false);

  const duplicatedLogos = [...toolsData, ...toolsData];
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-ovo">About me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center justify-center gap-4 my-5">
        {/* <div className="rounded-3xl shadow-lg border border-gray-300 w-44 sm:w-60 max-w-none">
          <Image
            src={my_pic}
            alt="My Picture"
            width={100}
            height={100}
            className=" w-full rounded-3xl"
          />
        </div> */}
        <div>
          <p className="mb-10 max-w-2xl mx-auto font-ovo text-lg text-gray-700 text-center">
            Full Stack Engineer passionate about building scalable, secure, and
            user-friendly web applications. I specialize in React, Next.js,
            TypeScript, Express.js, and PostgreSQL, with experience designing
            REST APIs, managing databases, and crafting responsive interfaces
            using Tailwind CSS. I actively use GitHub for version control and
            collaboration, integrate Open APIs to extend functionality, and
            bring websites to life with smooth, modern animations using Framer
            Motion. I enjoy solving real-world problems with clean, efficient
            code and creating seamless digital experiences from front to back.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-[5px_5px_0px_0px_#000]"
              >
                <Image
                  src={icon}
                  alt={title}
                  width={64}
                  height={64}
                  className="w-7 h-7 mt-3"
                />

                <h5 className="font-ovo my-4 font-semibold text-gray-700">
                  {title}
                </h5>
                <p className="text-sm text-gray-600">{description}</p>
              </li>
            ))}
          </ul>
          <h4 className="my-6  text-gray-700 font-ovo text-center text-4xl">
            Tools I Use
          </h4>
             <div
            className="w-full max-w-[17rem] sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <ul
              className={cn(
                "flex gap-4 sm:gap-6 md:gap-8 py-4",
                "animate-marquee",
                isPaused && "animate-pause"
              )}
            >
              {duplicatedLogos.map((tool, index) => (
                <li
                  className="flex-shrink-0 transition-all duration-300 hover:scale-110 w-16 h-8 sm:w-20 sm:h-10 md:w-24 md:h-12 lg:w-32 lg:h-16 flex items-center justify-center"
                  key={index}
                >
                  <Image
                    src={tool}
                    alt="tool"
                    width={128}
                    height={64}
                    className="object-contain w-full h-full"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
