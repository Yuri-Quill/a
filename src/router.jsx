import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ShopPage from "./Pages/ShopPage/ShopPage";
import FavoritePage from "./Pages/FavoritePage/FavoritePage";
import CartPage from "./Pages/CartPage/CartPage";
import DataLoader from "./components/DataLoader/DataLoader";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DataLoader Component={ShopPage} />,
      },
      {
        path: "/cart",
        element: <DataLoader Component={CartPage} />,
      },
      {
        path: "/favorite",
        element: <DataLoader Component={FavoritePage} />,
      },
      {
        path: "*",
        element: <ErrorPage errorCode="404" errorMessage="Page not found" />,
      }
    ],
  },
]);

export default router;
