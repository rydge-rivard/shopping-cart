import PropTypes from "prop-types";
import "./ProductGrid.css";

export default function ProductGrid({ productList }) {
  console.log(productList);

  const listItems = productList.map((product) => (
    <li key={product.id}>
      <img src={product.image} />
      <p>{product.title}</p>
      <p className="price">${product.price}</p>
      <div className="qty-wrapper">
        <button>-</button>
        <p>1</p>
        <button>+</button>
      </div>
      <button className="add-btn">ADD TO CART</button>
    </li>
  ));

  return <ul>{listItems}</ul>;
}

ProductGrid.propTypes = {
  productList: PropTypes.array.isRequired,
};
