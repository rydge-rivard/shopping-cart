import Nav from "../NavBar";
import PropTypes from "prop-types";
import "./Cart.css";

export default function Cart({ cart, setCart }) {
  console.log(cart);

  const cartItems = cart.map((item) => (
    <li key={item.product.id}>
      <img src={item.product.image} />
      <p>{item.product.title}</p>
      <div className="qty-wrapper total-wrapper">
        <p className="price">${item.product.price * item.qty}</p>
        <form action="" onSubmit={(e) => deleteItem(e, item)}>
          <fieldset>
            <label htmlFor="qty"></label>
            <input type="number" id="qty" min="0" defaultValue={item.qty} />
          </fieldset>
          <button className="add-btn">DELETE</button>
        </form>
      </div>
    </li>
  ));

  function deleteItem(e, item) {
    e.preventDefault();
    setCart(cart.filter((a) => a.product.id !== item.product.id));
  }

  return (
    <div className="cart">
      <Nav></Nav>
      <ul>{cartItems}</ul>
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};
