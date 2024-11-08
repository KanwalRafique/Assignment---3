import Image from "next/image";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projectmgm } from "./components/Projectmgm";
import Extension from "@/app/components/Extension";
import CustomiseApp from "./components/CustomiseApp";
import YourWork from "./components/YourWork";
import { Sponsers } from "./components/Sponsers";
import { Footer } from "./components/Footer";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projectmgm />
      <Extension />
      <CustomiseApp />
      <YourWork />
      <Sponsers />
      <Footer />

      

    </div>
  );
}




