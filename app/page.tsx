import Image from "next/image";
import Hero from "./component/Hero"
import Projects from "./component/Projects";
import Blog from "./component/Blog";
import NewsLetter from "./component/NewsLetter";


export default function Home() {
  return (
    <>
      <Hero/>
      <Projects/>
      <Blog/>
      <NewsLetter/>
      
    </>
  );
}
