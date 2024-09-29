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
import MiniSidebardPage from './pages/MiniSidebardPage';
import Exam from './components/Exam';
import ComponentName, { CollapsibleSection } from './components/Method';
import Login from './components/Login';
import Component from './pages/Salary';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/salary",
        element: <Salary />
      },
      {
        path: "/students",
        element: <Students />
      }
    ]
  },
  {
    path: "/admin",
    element: <MiniSidebardPage />,
    children: [
      {
        path: "attendance/F1-1779",
        element: <Attendance />
      }
    ]
  },
  {
    path: "*",
    element: <h1>Page Not Found</h1>
  },
  {
    path: "/projects",
    element: <Projects />
  },
  {
    path: "/dashboard/exam",
    element: <Exam/>
  },  
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/dashboard/methodology",
    element: <ComponentName/>
  }
]);


ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
