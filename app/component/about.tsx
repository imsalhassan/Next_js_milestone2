/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-require-imports */
import Image from "next/image"

const About = () => {
    return (
        <div id="about"><section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              About Me
              <br className="hidden lg:inline-block" />
              
            </h1>
            <p className="mb-5 leading-relaxed">
                
            With a foundation in applied physics and a growing passion for technology, I bring both scientific rigor and creativity to my projects. I completed my matriculation at Crescent Academy and my intermediate at St. Lawrence's Govt. Girls' College, and I’m currently pursuing a master's degree in applied physics. Alongside my studies, I've worked on various digital electronics-based projects, gaining hands-on experience and refining my technical skills.
           </p>
           <p>
           I’m skilled in MATLAB, TypeScript, and React, and I’m also diving into Web 3.0 and the metaverse, where I’m learning HTML and CSS to expand my web development abilities. My background equips me to tackle complex technical challenges, and I’m motivated to apply my knowledge to create impactful, cutting-edge solutions.
           </p>
            <div className="flex justify-center">
                <a href="/assets/cv/cv.pdf">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                View CV
              </button>
              </a>
             </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6  ">
            <Image
              className="object-cover object-center rounded mx-auto"
              alt="hero"
              src={require("../../public/assets/pic/profile picture.jpg")}
              width={200}
              height={200}
            />
          </div>
        </div>
      </section>
      </div>
    )
}

export default About