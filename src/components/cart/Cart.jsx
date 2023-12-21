import Nav from "../NavBar";
import PropTypes from "prop-types";
import "./Cart.css";
import CartItems from "./CartItems";

export default function Cart({ cart, setCart }) {
  console.log(cart);

  return (
    <div className="cart">
      <Nav></Nav>
      <ul>
        <CartItems cart={cart} setCart={setCart} />
      </ul>
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};
