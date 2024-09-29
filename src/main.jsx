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
import Attendance from './components/Attandance';
import Students from './components/coin/Students';

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
      },{
        path: "/projects",
        element: <Projects/>
      },
      {
        path: '/attendance/F1-1779',
        element: <Attendance/>
      },
      {
        path: "/students",
        element: <Students/>}
    ]}
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
