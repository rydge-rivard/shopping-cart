import Nav from "../NavBar";
import PropTypes from "prop-types";
import "./Cart.css";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";

export default function Cart({ cart, setCart }) {
  return (
    <div className="cart">
      <Nav cartCount={cart.length}></Nav>
      {cart.length <= 0 && <h1 className="empty-cart">Your cart is empty.</h1>}
      <ul>
        <CartItems cart={cart} setCart={setCart} />
      </ul>
      <CartTotal cart={cart} />
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};
