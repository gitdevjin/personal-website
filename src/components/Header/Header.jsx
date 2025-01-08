import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="Header" className="sticky top-0 left-0 w-full z-10 bg-transparent">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen}></Navbar>
      <div
        className={`fixed top-0 left-0 w-full h-screen z-40 bg-[#121212]
             text-white pt-40 transform transition-transform duration-700 ${
               isOpen ? "animate-slide-fade translate-x-0" : "side-menu-close"
             }`}
      >
        <SideMenu />
      </div>
    </div>
  );
}
