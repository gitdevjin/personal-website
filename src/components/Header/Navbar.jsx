import { Link } from "react-router-dom";
import HamburgerButton from "./HamburgerButton";

export default function Navbar() {
  return (
    <nav className="flex justify-normal">
      <img src="src/assets/logo.png" alt="Logo Image" className="w-20" />
      <Link className="" to="/">
        Profile
      </Link>
      <Link className="" to="/">
        Blog
      </Link>
      <Link className="" to="/">
        Project
      </Link>
      <HamburgerButton></HamburgerButton>
    </nav>
  );
}
