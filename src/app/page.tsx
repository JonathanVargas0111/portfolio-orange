import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills"
import Footer from "@/components/Footer"
import Image from "next/image";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About/>
      <Portfolio/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  );
}
