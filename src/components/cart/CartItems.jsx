import PropTypes from "prop-types";

export default function CartItems({ cart, setCart }) {
  const cartItems = cart.map((item) => (
    <li key={item.product.id}>
      <img src={item.product.image} />
      <p>{item.product.title}</p>
      <div className="qty-wrapper total-wrapper">
        <p className="price">${item.product.price * item.qty}</p>
        <form action="" onSubmit={(e) => deleteItem(e, item)}>
          <fieldset>
            <label htmlFor="qty"></label>
            <input
              type="number"
              id="qty"
              min="0"
              defaultValue={item.qty}
              onChange={(e) => updateQty(e, item)}
            />
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

  function updateQty(e, i) {
    setCart(
      cart.map((item) => {
        if (item.product.id === i.product.id) {
          return {
            ...item,
            qty: e.target.value,
          };
        } else {
          return item;
        }
      })
    );
  }

  return <>{cartItems}</>;
}

CartItems.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};
