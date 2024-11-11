import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Skills = () => {
    return(
        <div id="skill">
            <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">
         Skills
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
        My Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 -mt-[5rem]">
        { /* Skills */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full  bg-opacity-60 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <IoMdCheckmarkCircleOutline className="text-2xl font-bold"/>
            </div>
            <h2 className="text-white text-lg title-font font-medium">
              HTML 
            </h2>
          </div>
          <div className="flex-grow">
            <div className="relative h-1 w-60 bg-gray-300 rounded-xl">
                <div className="absolute bg-blue-700 h-1 rounded-xl w-60"></div>
            </div>
            <p className="font-bold text-left">100%</p>
            
          </div>
        </div>
      </div>


      { /* Skills */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full  bg-opacity-60 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <IoMdCheckmarkCircleOutline className="text-2xl font-bold"/>
            </div>
            <h2 className="text-white text-lg title-font font-medium">
              CSS
            </h2>
          </div>
          <div className="flex-grow">
            <div className="relative h-1 w-60 bg-gray-300 rounded-xl mr-60">
                <div className="absolute bg-blue-700 h-1 rounded-xl w-60"></div>
            </div>
            <p className="font-bold text-left">100%</p>
            
          </div>
        </div>
      </div>

      { /* Skills */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full  bg-opacity-60 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <IoMdCheckmarkCircleOutline className="text-2xl font-bold"/>
            </div>
            <h2 className="text-white text-lg title-font font-medium">
              Javascipt/Typescript
            </h2>
          </div>
          <div className="flex-grow">
            <div className="relative h-1 w-60 bg-gray-300 rounded-xl mr-60">
                <div className="absolute bg-blue-700 h-1 rounded-xl w-40"></div>
            </div>
            <p className="font-bold text-left">80%</p>
            
          </div>
        </div>
      </div>
      
      { /* Skills */}
      <div className="p-4 w-[80%] md:w-1/3">
        <div className="flex rounded-lg h-full  bg-opacity-60 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <IoMdCheckmarkCircleOutline className="text-2xl font-bold"/>
            </div>
            <h2 className="text-white text-lg title-font font-medium">
            Digital Electronics
            </h2>
          </div>
          <div className="flex-grow">
            <div className="relative h-1 w-[60%] bg-gray-300 rounded-xl mr-60">
                <div className="absolute bg-blue-700 h-1 rounded-xl w-[90%]"></div>
            </div>
            <p className="font-bold text-left">90%</p>
            
          </div>
        </div>
      </div>

      { /* Skills */}
      <div className="p-4 w-[80%] md:w-1/3">
        <div className="flex rounded-lg h-full  bg-opacity-60 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <IoMdCheckmarkCircleOutline className="text-2xl font-bold"/>
            </div>
            <h2 className="text-white text-lg title-font font-medium">
            NEXT JS
            </h2>
          </div>
          <div className="flex-grow">
            <div className="relative h-1 w-[60%] bg-gray-300 rounded-xl mr-60">
                <div className="absolute bg-blue-700 h-1 rounded-xl w-[70%]"></div>
            </div>
            <p className="font-bold text-left">70%</p>
            
          </div>
        </div>
      </div>

      { /* Skills */}
      <div className="p-4 w-[80%] md:w-1/3">
        <div className="flex rounded-lg h-full  bg-opacity-60 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <IoMdCheckmarkCircleOutline className="text-2xl font-bold"/>
            </div>
            <h2 className="text-white text-lg title-font font-medium">
            Microsoft OFFICE 
            </h2>
          </div>
          <div className="flex-grow">
            <div className="relative h-1 w-[60%] bg-gray-300 rounded-xl mr-60">
                <div className="absolute bg-blue-700 h-1 rounded-xl w-[95%]"></div>
            </div>
            <p className="font-bold text-left">95%</p>
            
          </div>
        </div>
      </div>


      
      
      
    </div>
  </div>
</section>

        </div>
    )

}

export default Skills