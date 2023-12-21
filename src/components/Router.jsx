import App from "../App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "../components/cart/Cart.jsx";
import ErrorPage from "../components/ErrorPage.jsx";
import { useState } from "react";

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

  return <RouterProvider router={router} />;
};

export default Router;
