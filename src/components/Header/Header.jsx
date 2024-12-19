import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <div>Logo</div>
      <Link to="/">Home</Link>
    </nav>
  );
}
