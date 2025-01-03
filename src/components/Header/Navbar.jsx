import { Link } from "react-router-dom";
import HamburgerButton from "./HamburgerButton";
import PropTypes from "prop-types";

Navbar.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default function Navbar({ isOpen, setIsOpen }) {
  return (
    <nav className="flex justify-between p-3 sm:pl-10 sm:pr-10 m-1 ">
      <div className="flex justify-start gap-3 sm:gap-6">
        <Link
          className="m-2 text-md text-xl sm:text-2xl flex flex-col hover:text-green-400 leading-none z-50"
          to="/"
        >
          <span>Hyunjin</span>
          <span>Shin</span>
        </Link>
        <Link className="m-2 text-md sm:text-2xl flex items-center" to="/">
          <span
            className="relative hover:before:scale-x-100 before:content-['']
                      before:absolute before:bottom-0 before:left-0 before:w-full
                      before:h-[2px] before:bg-current before:scale-x-0
                      before:origin-left before:transition-transform before:duration-500
                      before:bg-green-400"
          >
            Profile
          </span>
        </Link>
        <Link className="m-2 text-md sm:text-2xl flex items-center" to="/blog">
          <span
            className="relative hover:before:scale-x-100 before:content-['']
                      before:absolute before:bottom-0 before:left-0 before:w-full
                      before:h-[2px] before:bg-current before:scale-x-0
                      before:origin-left before:transition-transform before:duration-500
                      before:bg-green-400"
          >
            Blog
          </span>
        </Link>
        <Link className="m-2 text-md sm:text-2xl flex items-center" to="/blog">
          <span
            className="relative hover:before:scale-x-100 before:content-['']
                      before:absolute before:bottom-0 before:left-0 before:w-full
                      before:h-[2px] before:bg-current before:scale-x-0
                      before:origin-left before:transition-transform before:duration-500
                      before:bg-green-400"
          >
            Project
          </span>
        </Link>
      </div>
      <div className="flex items-center z-50">
        <HamburgerButton
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        ></HamburgerButton>
      </div>
    </nav>
  );
}
