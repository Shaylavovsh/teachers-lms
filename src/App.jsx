import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/  Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Salary from './pages/Salary';
import Layout from './components/Layout';

function App() {
  localStorage.setItem('attendanceData', JSON.stringify({
    'F1-1779': [
      { name: 'Asilbek Karimov', league: 'Геймеры', lastVisit: '28.09.2024', total: 2456, today: 0, coinLimit: 0 },
      { name: 'Azamat Shomaqsudov', league: 'Геймеры', lastVisit: '28.09.2024', total: 2543, today: 0, coinLimit: 0 },
      { name: 'Navruzbek Murodullayev', league: 'Геймеры', lastVisit: '26.09.2024', total: 3085, today: 0, coinLimit: 0 },
      { name: 'Shag’zoda Mirhanova', league: 'Геймеры', lastVisit: '13.07.2024', total: 1020, today: 0, coinLimit: 0 },
      { name: 'Shahriyor Shaylavov', league: 'Хакеры', lastVisit: '26.09.2024', total: 2335, today: 0, coinLimit: 0 },
      { name: 'Yahyo Tojiboyev', league: 'Кодеры', lastVisit: '29.08.2024', total: 1821, today: 0, coinLimit: 0 }
    ],
    'F1-1780': [
      { name: 'Student A', league: 'Кодеры', lastVisit: '15.09.2024', total: 1800, today: 0, coinLimit: 0 },
      { name: 'Student B', league: 'Хакеры', lastVisit: '16.09.2024', total: 1200, today: 0, coinLimit: 0 }
    ]
  }));
  
  return (
    <div className='h-full'>
      <Layout/>
    </div>
  );
}

export default App;
