import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
import { useEffect, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = ""; // Restore scrolling
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div id="Header" className="fixed top-0 left-0 w-full z-10 bg-transparent">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen}></Navbar>
      <div
        className={`fixed top-0 left-0 w-full h-screen overflow-hidden z-40 bg-[#121212]
             text-white pt-40 transform transition-transform duration-700 ${
               isOpen ? "animate-slide-fade translate-x-0" : "side-menu-close"
             }`}
      >
        <SideMenu />
      </div>
    </div>
  );
}
