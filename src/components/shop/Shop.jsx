import { useEffect, useState } from "react";
import Nav from "../NavBar";
import ProductGrid from "./ProductGrid";
import PropTypes from "prop-types";

export default function Shop({ cart, setCart }) {
  const [productList, setProductList] = useState([]);

  async function getProducts() {
    try {
      const response = await fetch(`https://fakestoreapi.com/products?limit=5`);
      const products = await response.json();
      setProductList(products);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="cart">
      <Nav></Nav>
      <div className="product-grid">
        <ProductGrid productList={productList} cart={cart} setCart={setCart} />
      </div>
    </div>
  );
}

Shop.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};
