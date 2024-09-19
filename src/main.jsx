import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Layout from './components/Layout';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Main layout with Outlet
    children: [
      {
        path: '/', // Default route
        element: <App />, // This will render inside Layout
      },
      {
        path: 'about',
        element: <h2>About Page</h2>, // You can add more pages here
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
