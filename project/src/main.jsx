import Feacture from './Pricing.jsx'
import Cart from './Cart.jsx'
import { createRoot } from 'react-dom/client'
import Support from './Feacture.jsx'
import App from './App.jsx'
import Sign from './Sign.jsx'
import './index.css'
import Login from './Login.jsx'
import { createBrowserRouter ,RouterProvider}  from "react-router-dom"
import Pricing from './Pricing.jsx'
import Singleproduct from './SingleProduct.jsx'


const router=createBrowserRouter([
  {
    path:'/',
    element:<App></App>

  },{
    path:'/feacture',
    element:<Feacture></Feacture>
  },{
    path:'/support',
    element:<Support></Support>
  }
  ,{
    path:'/pricing',
    element:<Pricing></Pricing>
  },
  {
    path:'/cart',
    element:<Cart></Cart>
  },
  {
    path:'/product/:id',
    element:<Singleproduct></Singleproduct>
  }

  ,{
    path:'/login',
    element:<Login></Login>

  },{
    path:'/sign',
    element:<Sign></Sign>

  }

])

createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>
)
