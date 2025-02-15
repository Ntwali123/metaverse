import Image from "next/image";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Explore from "@/sections/Explore";
import GetStarted from "@/sections/GetStarted";
import WhatsNew from "@/sections/WhatsNew";
import World from "@/sections/World";
import Insights from "@/sections/Insights";
import Feedback from "@/sections/Feedback";
// import Navbar from "@/components/Navbar";


export default function Home() {
  return (
   <>
   {/*<Navbar />*/}
       <Hero />
       <About />
       <Explore />
       <GetStarted />
       <WhatsNew />
       <World />
       <Insights />
       <Feedback />
   </>
  );
}
