import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white h-full">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-6">MARS</h1>
        <nav>
          <ul>
            <li className="mb-2">
              <a href="/" className="flex items-center p-2 bg-orange-500 rounded">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                Dashboard
              </a>
            </li>
            <li>
              <a href="/salary" className="flex items-center p-2 hover:bg-gray-800 rounded">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Salary
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
