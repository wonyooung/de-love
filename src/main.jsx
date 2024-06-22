import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import OnlineOrder from './components/pages/onlineOrder.jsx'
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
    element: "home"
  },{
    path: "/product",
    element: "prodcut"
  },{
    path: "/online-order",
    element: <OnlineOrder/>
  },{
    path: "/outlets",
    element: "outlet"
  },{
    path: "/profile",
    element: "profile"
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
