import App from "../App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "../components/cart/Cart.jsx";
import ErrorPage from "../components/ErrorPage.jsx";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
