import { useState } from "react";

export default function HamburgerButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="relative flex items-center justify-center w-12 h-12 rounded-full hover:ring-4 focus:ring-4 ring-opacity-30 duration-200 shadow-md"
    >
      {/* Container for Hamburger/X */}
      <div className="relative flex flex-col justify-between w-8 h-6 transform transition-all duration-300">
        {/* Top Line */}
        <div
          className={`bg-white h-1 w-full rounded-sm transform transition-all duration-500 ${
            isOpen ? "rotate-45 translate-y-2.5" : ""
          }`}
        ></div>
        {/* Middle Line */}
        <div
          className={`bg-white h-1 w-full rounded-sm transform transition-all duration-500 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></div>
        {/* Bottom Line */}
        <div
          className={`bg-white h-1 w-full rounded-sm transform transition-all duration-500 ${
            isOpen ? "-rotate-45 -translate-y-2.5" : ""
          }`}
        ></div>
      </div>
    </button>
  );
}
