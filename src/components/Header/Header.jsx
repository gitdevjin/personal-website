import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="Header" className="fixed w-full">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen}></Navbar>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30">
          <SideMenu />
        </div>
      )}
    </div>
  );
}
