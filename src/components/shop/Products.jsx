import PropTypes from "prop-types";

export default function Products({ productList, cart, setCart }) {
  const products = productList.map((product) => (
    <li key={product.id}>
      <img src={product.image} />
      <p>{product.title}</p>
      <p className="price">${product.price}</p>
      <div className="qty-wrapper">
        <form action="" onSubmit={(e) => addToCart(e, product)}>
          <fieldset>
            <label htmlFor="qty"></label>
            <input type="number" id="qty" min="0" defaultValue={1} />
          </fieldset>
          <button className="add-btn">ADD TO CART</button>
        </form>
      </div>
    </li>
  ));

  function addToCart(e, product) {
    e.preventDefault();
    const input = document.querySelector("input");
    console.log(input.value);
    setCart([...cart, { product, qty: input.value }]);
  }

  return <>{products}</>;
}

Products.propTypes = {
  productList: PropTypes.array.isRequired,
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};
