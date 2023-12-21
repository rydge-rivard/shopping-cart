import PropTypes from "prop-types";

export default function ProductGrid({ productList }) {
  console.log(productList);

  const listItems = productList.map((product) => (
    <li key={product.id}>
      <img src={product.image} />
      <p>{product.title}</p>
      <p>${product.price}</p>
      <button>ADD TO CART</button>
    </li>
  ));

  return <ul>{listItems}</ul>;
}

ProductGrid.propTypes = {
  productList: PropTypes.array.isRequired,
};
