import Feature from './Pricing.jsx'; // Correcting the typo from 'Feacture'
import Cart from './Cart.jsx';
import { createRoot } from 'react-dom/client';
import Support from './Support.jsx'; // Assuming Support is a different component
import App from './App.jsx';
import Sign from './Sign.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './utility/store';
import Login from './Login.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Pricing from './Pricing.jsx';
import SingleProduct from './SingleProduct.jsx'; // Capitalizing to match the import name

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/feature', // Adjusted the route to match 'Feature'
    element: <Feature />,
  },
  {
    path: '/support',
    element: <Support />, // If Support is a different component
  },
  {
    path: '/pricing',
    element: <Pricing />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/product/:id',
    element: <SingleProduct />, // Corrected to match the import name
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/sign',
    element: <Sign />,
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
