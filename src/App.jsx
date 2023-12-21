import "./App.css";
import Shop from "./components/shop/Shop";
import PropTypes from "prop-types";

function App({ cart, setCart }) {
  return (
    <>
      <Shop cart={cart} setCart={setCart} />
    </>
  );
}

export default App;

App.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};
