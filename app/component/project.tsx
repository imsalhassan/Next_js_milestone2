/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
    return (
        <div id="project">
            <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
        My Projects 
      </h1>
      
    </div>
    <div className="flex flex-wrap -m-8">
        {/* Project*/}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../public/assets/projects/project_01.png')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
              Shareable Resume
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
              RESUME
            </h1>
            <p className="leading-relaxed  line-clamp-3">
              An editable and shareable resume where all the important details are given to fill for your comfort.
            </p>
            <Link target="_blank" href={"https://milestones5-imsal-hassans-projects.vercel.app/"}>
            <p className="leading-relaxed text-indigo-400 hover:underline">
                View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
       {/* Project*/}
       <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../public/assets/projects/project_03.png')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
              Simple Calculator
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
              Typescript Project
            </h1>
            <p className="leading-relaxed line-clamp-4 ">
              A task given to make a simple calculator through typescript..
              </p>
            <Link target="_blank" href={"https://github.com/imsalhassan/simple-calculator.git"}>
            <p className="leading-relaxed text-indigo-400 hover:underline">
                View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}

export default Project