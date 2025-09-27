import React from "react";
import Image from "next/image";
// import my_pic from "../assets/my_pic.png";
import { infoList } from "@/assets/assets2/assets";

export const About = () => {
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
          <p className="mb-10 max-w-2xl font-ovo text-lg text-gray-700 text-center">
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
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon,  title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black"
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
        </div>
      </div>
    </div>
  );
};
