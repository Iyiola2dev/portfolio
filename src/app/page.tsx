import { Header, Navbar, About, Services, Work } from "@/components";
// import Image from "next/image";

export default function Home() {
  return (
  <div className="min-h-screen bg-gray-100 text-black scroll-smooth">
    <Navbar />
    <Header />
    <About />
    <Services />
    <Work />
    {/* <Contact /> */}
    {/* <Footer /> */}
  </div>
  );
}
