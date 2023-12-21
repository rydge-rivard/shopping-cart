import PropTypes from "prop-types";
import "./CartTotal.css";

export default function CartTotal({ cart }) {
  function calcTotal() {
    let total = 0;
    cart.forEach((item) => {
      let subtotal = item.product.price * item.qty;
      total = total + subtotal;
    });
    return Math.round(total);
  }

  return (
    <div className="cart-total">
      <h2>TOTAL: ${calcTotal()}</h2>
    </div>
  );
}

CartTotal.propTypes = {
  cart: PropTypes.array.isRequired,
};
