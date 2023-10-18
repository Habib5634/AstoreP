import React, { useState } from 'react';

import { BiBell} from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminNav = () => {
  const [menu,setMenu]=useState(false)
  const navigate = useNavigate()
const MenuToggle = ()=>{
  setMenu(!menu)
}
const handleLogout = () => {
  // Clear the token from local storage
  localStorage.removeItem('token');
  toast.success("Logout Successfully")
navigate('/login')
  
}

  const links = [
   
    { title: <BiBell className='mt-1 mr-4 text-[#7644FF] '/>, path: "javascript:void(0)" },
  ];

  return (
    <nav className=' py-2 shadow-xl'>
      <div className='flex justify-between px-10 pt-4'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-medium text-[#7644FF] '>Hello Admin</h1>
        </div>

        <div className="flex items-center">
        
          <label htmlFor="search" className="sr-only block text-sm font-semibold text-heading">Search</label>
          <div className="relative flex items-center ml-4">
            
            <input
              id="search"
              name="search"
              placeholder="Search"
              className="block w-full rounded-full border-2 border-layer-3 bg-muted-1 px-4 py-2 pl-4 pr-6 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
            />
            
          </div>
          {links.map((item, idx) => (
            <a key={idx} href={item.path} className="text-gray-700 text-3xl hover:text-gray-900 ml-4">
              {item.title}
            </a>
          ))}
          <button  className="w-10 relative h-10 outline-none rounded-full ring-offset-2 ring-gray-200 lg:focus:ring-2 lg:block" onClick={MenuToggle}>
            <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" className="w-full h-full rounded-full" alt="Profile" />
            {menu && <>
          <div className='flex flex-col border p-1 space-y-2 absolute mt-2 -ml-2 bg-white rounded-md' >
            <button className='hover:bg-gray-100'>Security</button>
            <button className='hover:bg-gray-100' onClick={handleLogout}> Logout</button>
          </div>
          
          </>}
          </button>
          
        </div>
      </div>
    </nav>
  );
};

export default AdminNav;
