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
        <Link className="m-2 text-md sm:text-2xl flex flex-col leading-tight z-50" to="/">
          <span>Hyunjin</span>
          <span>Shin</span>
        </Link>
        <Link className="m-2 text-md sm:text-2xl flex items-center" to="/">
          Profile
        </Link>
        <Link className="m-2 text-md sm:text-2xl flex items-center" to="/">
          Blog
        </Link>
        <Link className="m-2 text-md sm:text-2xl flex items-center" to="/">
          Project
        </Link>
      </div>
      <div className="flex items-center">
        <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen}></HamburgerButton>
      </div>
    </nav>
  );
}
