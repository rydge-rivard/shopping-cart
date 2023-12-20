import "./NavBar.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul className="nav-bar">
        <li>Rydge&apos;s Shop</li>
        <li>Shop</li>
        <li>
          <Link to="cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}
