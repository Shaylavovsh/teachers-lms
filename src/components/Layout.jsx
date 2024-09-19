import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <h1>Layout</h1>
      {/* The Outlet will render the matched child route */}
      <Outlet />
    </div>
  );
};

export default Layout;
