import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./App.scss"

import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products"
import Product from "./pages/Product/Product"

import Layout from "./layouts/Layout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products/:title",
        element: <Products />,
      },
      {
        path: "product/:id",
        element: <Product />,
      },
    ],
  },
])

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}
//createRoutesFromElements( <Route path="/" element={<Root />}> Route path=".." element={<.. />} /></Route>)

export default App
