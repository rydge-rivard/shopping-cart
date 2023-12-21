import Nav from "../NavBar";

export default function Shop() {
  let productList = [];

  async function getProducts() {
    try {
      const response = await fetch(`https://fakestoreapi.com/products?limit=5`);
      const products = await response.json();
      productList = products;
    } catch (err) {
      console.log(err);
    }
    console.log(productList);
  }

  getProducts();

  return (
    <div className="cart">
      <Nav></Nav>
      <div>SHOP</div>
    </div>
  );
}
