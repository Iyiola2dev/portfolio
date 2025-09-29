// import { assets } from "@/assets/assets2/assets";
// import { div } from "framer-motion/client";
// import Image from "next/image";
// import React from "react";
// import { GrView } from "react-icons/gr";

// interface workData {
//   title: string;
//   description: string;
//   bgImage: string;
//   link: string;
// }

// export const Work = () => {
//   const workInfo: workData[] = [
//     {
//       title: "Altan Infinity",
//       description:
//         "A comprehensive platform for shoe repairs and customization.",
//       bgImage: "https://res.cloudinary.com/dtlejpoxq/image/upload/v1759143578/my%20portfolio/altan_rmhnjp.jpg",
//       link: "https://www.altaninfinity.de/",
//     },
//     {
//       title: "Simservicehub",
//       description:
//         "A comprehensive platform that connects artisans and customers.",
//       bgImage: "https://res.cloudinary.com/dtlejpoxq/image/upload/v1759143583/my%20portfolio/simservice_fctnnq.jpg",
//       link: "https://www.simservicehub.com/",
//     },
//     {
//       title: "Simul Blog",
//       description:
//         "A comprehensive platform for sharing insights and articles.",
//       bgImage: "https://res.cloudinary.com/dtlejpoxq/image/upload/v1759143587/my%20portfolio/blog_website_bb9jsj.jpg",
//       link: "https://www.blog.simu-l.com/blog",
//     },
//     {
//       title: "Blueberry",
//       description:
//         "A comprehensive platform that connects tourists with local experiences.",
//       bgImage: "https://res.cloudinary.com/dtlejpoxq/image/upload/v1759143589/my%20portfolio/blueberry_h3arnn.jpg",
//       link: "https://www.blueberryzanzibar.com/",
//     },
//     {
//       title: "Simul Management",
//       description: "Website that showcases management solutions.",
//       bgImage: "https://res.cloudinary.com/dtlejpoxq/image/upload/v1759143586/my%20portfolio/simul_xdhkwb.jpg",
//       link: "https://www.simu-l.com/",
//     },
//   ];

//   return (
//     <div id="projects" className="w-full px-[12%] py-10 scroll-mt-20">
//       <h4 className="text-center mb-2 text-lg font-ovo text-gray-800">
//         My Portfolio
//       </h4>
//       <h2 className="text-center text-5xl font-ovo text-gray-800">
//         My lastest work
//       </h2>
//       <p className="mb-10 max-w-2xl mx-auto font-ovo text-lg text-gray-800 text-center">
//         Welcome to my portfolio! Here are some of my recent projects that
//         showcase my skills and expertise in web development and design.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 max-w-4xl mx-auto">
//         {workInfo.map((project, index) => (
//           <div
//             key={index}
//             className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
//             style={{ backgroundImage: `url(${project.bgImage})` }}
//           >
//             <div className="bg-white w-10/12  rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 p-4  group-hover:bottom-7 transition flex items-center justify-between duration-500 hover:-translate-y-1  hover:shadow-[3px_3px_0px_0px_#000] ">
//               <div>
//                 <h3>{project.title}</h3>
//                 {/* <p>{project.description}</p> */}
//               </div>
//               <div>
//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <GrView />
//                   {/* <Image
//                     src={assets.send_icon}
//                     alt="View Project"
//                     className="w-5"
//                   /> */}
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">

//       </ul> */}
//     </div>
//   );
// };
"use client";


import React from "react";
import { ExternalLink } from "lucide-react";

interface workData {
  title: string;
  description: string;
  bgImage: string;
  link: string;
  tags?: string[];
}

export const Work = () => {
  const workInfo: workData[] = [
    {
      title: "Altan Infinity",
      description:
        "A comprehensive platform for shoe repairs and customization with modern e-commerce features.",
      bgImage:
        "https://res.cloudinary.com/dtlejpoxq/image/upload/v1759143578/my%20portfolio/altan_rmhnjp.jpg",
      link: "https://www.altaninfinity.de/",
      tags: [
        "E-commerce",
        "React",
        "Node.js",
        "Database(MongoDB)",
        "Payment Integration(paypal, molie)",
      ],
    },
    {
      title: "Simservicehub",
      description:
        "A comprehensive platform that connects artisans and customers with seamless booking and communication.",
      bgImage:
        "https://res.cloudinary.com/dtlejpoxq/image/upload/v1759143583/my%20portfolio/simservice_fctnnq.jpg",
      link: "https://www.simservicehub.com/",
      tags: [
        "Marketplace",
        "React.js",
        "Database(PostgreSQL)",
        "Payment Integration(paystack)",
      ],
    },
    {
      title: "Simul Blog",
      description:
        "A modern blogging platform for sharing insights and articles with rich content management.",
      bgImage:
        "https://res.cloudinary.com/dtlejpoxq/image/upload/v1759143587/my%20portfolio/blog_website_bb9jsj.jpg",
      link: "https://www.blog.simu-l.com/blog",
      tags: ["Blog", "CMS", "SEO"],
    },
    {
      title: "Blueberry",
      description:
        "A comprehensive platform that connects tourists with authentic local experiences in Zanzibar.",
      bgImage:
        "https://res.cloudinary.com/dtlejpoxq/image/upload/v1759143589/my%20portfolio/blueberry_h3arnn.jpg",
      link: "https://www.blueberryzanzibar.com/",
      tags: ["Tourism", "Booking", "Mobile-First"],
    },
    {
      title: "Simul Management",
      description:
        "Professional website showcasing comprehensive management solutions for modern businesses.",
      bgImage:
        "https://res.cloudinary.com/dtlejpoxq/image/upload/v1759143586/my%20portfolio/simul_xdhkwb.jpg",
      link: "https://www.simu-l.com/",
      tags: ["Corporate", "Landing Page", "Responsive"],
    },
  ];

  return (
    <section
      id="projects"
      className="w-full px-4 sm:px-[12%] py-16 scroll-mt-20 bg-gradient-to-b from-gray-50/50 to-white font-ovo"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h4 className="text-sm font-semibold tracking-wider text-gray-900 uppercase mb-3">
          My Portfolio
        </h4>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          My Latest Work
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
          Welcome to my portfolio! Here are some of my recent projects that
          showcase my skills and expertise in web development and design.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {workInfo.map((project, index) => (
          <div
            key={index}
            className="group relative aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-all duration-500" />

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              {/* Tags - Show on hover */}
              {project.tags && (
                <div className="mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Description - Show on hover */}
              <div className="mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-200">
                <p className="text-white/90 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Title and Action */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 border border-white/20">
                <div className="flex items-center justify-between">
                  <div className="">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {project.title}
                    </h3>
                    {/* <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      <p className="text-sm text-gray-600">View Project</p>
                    </div> */}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gray-600 hover:bg-gray-700 text-white rounded-full transition-all duration-300 transform group-hover:scale-110 hover:shadow-lg"
                    aria-label={`View ${project.title} project`}
                  >
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            </div>

            {/* Hover indicator */}
            {/* <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                <Eye size={16} className="text-white" />
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};
