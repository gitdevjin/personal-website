import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="Header" className="fixed w-full z-10">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen}></Navbar>
      <div
        className={`fixed top-0 left-0 w-full h-screen z-40 bg-black
             text-white pt-40 transform transition-transform duration-700 ${
               isOpen ? "translate-x-0" : "-translate-x-full"
             }`}
      >
        <SideMenu />
      </div>
    </div>
  );
}
