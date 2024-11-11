/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from 'typewriter-effect';

const Hero = () => {
    return(
        <div> 
            <section className="text-gray-400 bg-gray-900 body-font bg-fixed bg-cover bg-center 
            custom-image bg-fixed">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
      <Image
        className="object-cover object-center rounded mx-auto "
        alt="hero"
        src={require('../../public/assets/pic/pic.png')}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
        I am
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: [' Software Developer',
        'Applied Physicist'
    ],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <div className="w-[200px] h-[7px] bg-[#03346E]"></div>
      <p className="mb-8 leading-relaxed text-white">
        I’m a master’s student in applied physics with a strong drive to bridge scientific understanding and practical applications 
        in technology. My academic background gives me a unique approach to problem-solving, especially when tackling complex technical challenges
        like stability testing and system optimization. I’m proficient in tools like MATLAB, React, and JavaScript, and I enjoy using them to 
        develop solutions that balance analytical rigor with creative design.

        My work reflects a blend of technical expertise and curiosity, as I’m always exploring new ways to expand my knowledge and skill set. 
        I’m particularly passionate about projects where I can apply physics principles to create impactful tech solutions. Outside of academics,
        I stay current with emerging trends, work on personal projects, and enjoy connecting with others in the tech and science communities.</p>
      <div className="flex justify-center">
        <Link href ={"#contact"}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}

export default Hero