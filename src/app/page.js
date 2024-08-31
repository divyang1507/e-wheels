import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

export default function Home() {
  return (
  <main className='overflow-hidden'>
    <Navbar/>
    <Hero/>
  </main>
  );
}
