import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.css"
import Layout from "./components/containers/Layout"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import Wishlist from "./components/Wishlist"
import CatList from "./components/CatList"
import Login from "./pages/Login"
import Register from "./pages/Register"

const App = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/products/:category",
          element: <Products />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/categories",
          element: <CatList />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/wishlist",
          element: <Wishlist />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App
