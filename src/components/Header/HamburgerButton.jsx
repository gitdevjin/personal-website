import PropTypes from "prop-types";

HamburgerButton.propTypes = {
  isOpen: PropTypes.bool.isRequired, // 'isOpen' should be a boolean and is required
  setIsOpen: PropTypes.func.isRequired, // 'setIsOpen' should be a function and is required
};

export default function HamburgerButton({ isOpen, setIsOpen }) {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="relative flex items-center justify-center w-12 h-12 rounded-full hover:ring-4 ring-green-400 ring-opacity-90 duration-200 shadow-md"
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
