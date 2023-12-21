import PropTypes from "prop-types";
import "./ProductGrid.css";
import Products from "./Products";

export default function ProductGrid({ productList, cart, setCart }) {
  return (
    <ul>
      <Products productList={productList} cart={cart} setCart={setCart} />
    </ul>
  );
}

ProductGrid.propTypes = {
  productList: PropTypes.array.isRequired,
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};
