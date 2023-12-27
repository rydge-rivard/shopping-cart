import PropTypes from "prop-types";

export default function Products({ productList, cart, setCart }) {
  const products = productList.map((product) => (
    <li key={product.id} id={product.id}>
      <img src={product.image} />
      <p>{product.title}</p>
      <p className="price">${product.price}</p>
      <div className="qty-wrapper">
        <form action="" onSubmit={(e) => addToCart(e, product)}>
          <fieldset>
            <label htmlFor="qty"></label>
            <input type="number" id="qty" min="0" defaultValue={1} name="qty" />
          </fieldset>
          <button className="add-btn">ADD TO CART</button>
        </form>
      </div>
    </li>
  ));

  function addToCart(e, product) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    setCart([...cart, { product, qty: formJson.qty }]);
  }

  return <>{products}</>;
}

Products.propTypes = {
  productList: PropTypes.array.isRequired,
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};
