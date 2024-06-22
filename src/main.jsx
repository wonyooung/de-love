import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import OnlineOrder from './components/pages/onlineOrder.jsx'
import Product from './components/pages/product.jsx'
import Outlets from './components/pages/outlets.jsx'
import Profil from './components/pages/profile.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },{
    path: '/home',
    element: <App/>
  },{
    path: "/product",
    element: <Product/>
  },{
    path: "/online-order",
    element: <OnlineOrder/>
  },{
    path: "/outlets",
    element: <Outlets/>
  },{
    path: "/profile",
    element: <Profil/>
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
