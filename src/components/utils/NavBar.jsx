import "./NavBar.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Nav({ cartCount }) {
  return (
    <nav>
      <ul className="nav-bar">
        <li>
          <Link to="/">Rydge&apos;s Shop</Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/cart" className="flex">
            Cart{<div className="counter">{cartCount}</div>}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  cartCount: PropTypes.number.isRequired,
};
