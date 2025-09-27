import { Header, Navbar, About } from "@/components";
// import Image from "next/image";

export default function Home() {
  return (
  <div className="min-h-screen bg-gray-100 text-black scroll-smooth">
    <Navbar />
    <Header />
    <About />
  </div>
  );
}
