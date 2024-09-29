import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Salary from './pages/Salary';
import Projects from './pages/Projects';
import MiniSidebard from './pages/MiniSidebardPage';
import MiniSidebardPage from './pages/MiniSidebardPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Dashboard/>
      },
      {
        path: "/salary",
        element: <Salary/>
      },
    ]
  },
  {
    path: "*",
    element: <h1>Page Not Found</h1>
  },
  {
    path: "/dashboard",
    element: <MiniSidebardPage/>,
  },
  {
    path: '/dashboard/projects',
    element: <Projects/>
  },
  {
    path: ''
  }
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
