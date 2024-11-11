// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from "next/image";
import Hero from "./component/hero";
import Contact from "./component/contact";
import Project from "./component/project";
import About from "./component/about";
import Skills from "./component/skill";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
      );
}
