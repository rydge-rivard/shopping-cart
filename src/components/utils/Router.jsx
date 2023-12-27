import App from "../../App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "../cart/Cart.jsx";
import ErrorPage from "../utils/ErrorPage.jsx";
import { useState } from "react";
import Nav from "./NavBar.jsx";

const Router = () => {
  const [cart, setCart] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App cart={cart} setCart={setCart} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "cart",
      element: <Cart cart={cart} setCart={setCart} />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <RouterProvider router={router}>
      <Nav />
    </RouterProvider>
  );
};

export default Router;
