/* eslint-disable @typescript-eslint/no-require-imports */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin  } from "react-icons/fa";

const Footer = () => {
    return(
        <div className="bg-[#F3F3E0]">
            <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image src={require("../../public/assets/pic/profile picture.jpg")}
      alt="Imsal Hassan" 
      width={100} 
      height={100} 
      className="w-[150px]"/>
     
      <span className="ml-3 text-xl">Imsal Hassan</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Imsal Hassan 
      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link
      target="_blank"
      href={"https://www.linkedin.com/in/imsal-hassan-4646a329a/"} className="text-gray-500">

      <FaLinkedin className="text-4xl hover:text-[#03346E]" />
        </Link>
    </span>
  </div>
</footer>


        </div>
    )
}

export default Footer