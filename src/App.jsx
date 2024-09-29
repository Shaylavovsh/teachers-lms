import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/  Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Salary from './pages/Salary';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
            <Routes>
              <Route path="/salary" element={<Salary />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
