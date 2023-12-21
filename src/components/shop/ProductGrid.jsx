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
        <form action="">
          <fieldset>
            <label htmlFor="qty"></label>
            <input type="number" id="qty" defaultValue={1} />
          </fieldset>
          <button className="add-btn">ADD TO CART</button>
        </form>
      </div>
    </li>
  ));

  return <ul>{listItems}</ul>;
}

ProductGrid.propTypes = {
  productList: PropTypes.array.isRequired,
};
