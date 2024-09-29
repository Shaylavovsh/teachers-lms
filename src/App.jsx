import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/  Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Salary from './pages/Salary';
import Layout from './components/Layout';

function App() {
  return (
    <div className='h-full'>
      <Layout/>
    </div>
  );
}

export default App;
