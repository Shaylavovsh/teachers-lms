import React from 'react'
import Navbar from './Navbar'
import Sidebar from "./  Sidebar"
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='w-full h-[100%]'>
            <div className=''>
                <Navbar/>
            </div>
        <div className='flex'>
            <Sidebar/>
            <div className='bg-gray-100 w-full max-h-screen overflow-x-auto'>
                <Outlet/>
            </div>
        </div>
    </div>



//     <Router>
//     <div className="flex h-screen bg-gray-100">
//       <div className='flex items-end'>
//         <Sidebar />
//       </div>
//       <div className="flex-1 flex flex-col overflow-hidden">
//         <Navbar />
//         <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//           </Routes>
//           <Routes>
//             <Route path="/salary" element={<Salary />} />
//           </Routes>
//         </main>
//       </div>
//     </div>
//   </Router>
  )
}

export default Layout