import React, { useState, useEffect } from 'react';
import { RiMenuLine} from 'react-icons/ri';
import './Sidebar.css'
import Navbar from '../AdminNav/Navbar'
import {FaBars,FaUsers} from 'react-icons/fa'
import {RxDashboard} from 'react-icons/rx'
import {HiUsers} from 'react-icons/hi'
import {AiOutlineRight,AiOutlineDown,AiOutlineWechat,AiOutlineDollarCircle} from 'react-icons/ai'
import {MdOutlineWatchLater} from 'react-icons/md'
import {BiBookContent,BiBell} from 'react-icons/bi'
import AddProduct from '../../Pages/Product/AddProduct/AddProduct';
import AllProduct from '../../Pages/Product/AllProducts/AllProduct';
import { useSelector } from 'react-redux'
import Dashboard from '../../Pages/Dashboard/Dashboard';
import Spinner from '../Spinner/Spinner';
import Users from '../../Pages/Users/Users';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768);
  const [selectedPage, setSelectedPage] = useState('Dashboard');
  const [tutorDropdown,setTutorDropdown] = useState(false)
  const [studentDropdown, setStudentDropdown] = useState(false)
  const [adminDropdown, setAdminDropdown]  = useState(false)
  const { token ,loading} = useSelector(state => state.auth)
  console.log(token)
  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsOpen(window.innerWidth > 768);
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);


    const handleTutorDropdown = () =>{
  setTutorDropdown(!tutorDropdown)
  
    }
    const handleStudentDropdown = () =>{
      
      setStudentDropdown(!studentDropdown)
        }
    const handleAdminDropdown = () =>{
      
      setAdminDropdown(!adminDropdown)
            }

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };

  const handleLinkClick = (page) => {
    setSelectedPage(page);
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  let content;

  if (selectedPage === 'Dashboard') {
    content = (
      <Dashboard/>
    );
  } else if (selectedPage === 'allProduct') {
    content = (
      <AllProduct/>
    );
  } else if (selectedPage === 'addProduct') {
    content = (
      <AddProduct/>
    );
  }else if (selectedPage === 'removeProduct') {
    content = (
      <div>remove Product</div>
    );
  }else if (selectedPage === 'allOrder') {
    content = (
      <div>All Order</div>
    );
  }else if (selectedPage === 'pendingOrder') {
    content = (
      <div>Pending Order</div>
    );
  }else if (selectedPage === 'completedOrders') {
    content = (
      <div>completed student</div>
    );
  }else if (selectedPage === 'allAdmin') {
    content = (
      <div>all admin</div>
    );
  }else if (selectedPage === 'addAdmin') {
    content = (
      <div>Add Admin</div>
    );
  }else if (selectedPage === 'removeAdmin') {
    content = (
      <div className='p-4'>
        <h1>Remove Admin  </h1>
       
      </div>
    );
  }
  else if (selectedPage === 'Session') {
    content = (
      <div>Session</div>
    );
  }else if (selectedPage === 'users') {
    content = (
      <Users/>
    );
  }else if (selectedPage === 'content') {
    content = (
      <div>content</div>
    );
  }else if (selectedPage === 'earning') {
    content = (
      <div>earning</div>
    );
  }else if (selectedPage === 'notification') {
    content = (
      <div>notification</div>
    );
  }

  return (
    <>
    {loading ? <Spinner/>:
    <div className={`h-screen flex overflow-y-auto`}>
      {isOpen && (
        <div className={`w-1/6 overflow-y-auto scrollbar bg-white border-r p-3 border-gray-200 `}>
          <div className=" bg-gray-50 h-full">
            
            <div className="flex items-center  h-12">
            <button 
            // onClick={toggleSidebar} 
            className="md:hidd text-gray-600">
              <FaBars size={20} className='text-black ml-2 mr-6' />
            </button>
              <span className="text-xl font-medium self-center text-black uppercase"><span className='text-2xl font-bold'>A</span>store<span className='text-green-700 text-3xl'>.</span></span>
            </div>
            <ul className="mt-6">
              <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('Dashboard')}
                  className={`flex items-center py-2 w-full hover:bg-gray-200 ${selectedPage === 'Dashboard' ? 'text-black bg-gray-200' : 'text-gray-400'}`}
                >
                  <span className="ml-2 flex text-xl  self-center "><RxDashboard size={20} className='mt-1 mr-6' />Dashboard</span>
                </button>
              </li>
              
              <li className="mb-2">
                <button
                  onClick={handleTutorDropdown}
                  className={`flex items-center py-2 w-full ${tutorDropdown  ? 'text-black bg-gray-200' : 'text-gray-400'}`}
                >
                  <span className="ml-2 flex text-xl   "><FaUsers size={20} className='mt-1 mr-6' />Products {tutorDropdown  ? (<AiOutlineDown className='mt-2 text-sm ml-14'/>):(<AiOutlineRight className='mt-2 text-sm ml-14'/>) }</span>
                </button>
              </li>
              {tutorDropdown && (
                <>
 <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('allProduct')}
                  className={`flex items-center py-2 hover:bg-gray-200 w-full ${selectedPage === 'allProduct' ? 'text-black  bg-gray-200' : 'text-gray-400'}`}
                >
                  <span className=" flex text-xl  self-center ml-6">All Products</span>
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('addProduct')}
                  className={`flex items-center py-2 hover:bg-gray-200 w-full ${selectedPage === 'addProduct' ? 'text-black  bg-gray-200' : 'text-gray-400'}`}
                >
                  <span className=" flex text-xl  self-center ml-6">Add New Product</span>
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('removeProduct')}
                  className={`flex items-center py-2 hover:bg-gray-200 w-full ${selectedPage === 'removeProduct' ? 'text-black  bg-gray-200' : 'text-gray-400'}`}
                >
                  <span className=" flex text-xl  self-center ml-6">Remove Product</span>
                </button>
              </li>
              
                
                </>
              )}

<li className="mb-2">
                <button
                  onClick={handleStudentDropdown}
                  className={`flex items-center py-2 hover:bg-gray-200 w-full ${studentDropdown  ? 'text-black bg-gray-200' : 'text-gray-400'}`}
                >
                  <span className="ml-2 flex text-xl  self-center "><FaUsers size={20} className='mt-1 mr-6' />Orders {studentDropdown  ? (<AiOutlineDown className='mt-2 text-sm ml-[75px]'/>):(<AiOutlineRight className='mt-2 text-sm ml-[75px]'/>) }</span>
                </button>
              </li>
              {studentDropdown && (
                <>
 <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('allOrder')}
                  className={`flex items-center hover:bg-gray-200 py-2 w-full ${selectedPage === 'allOrder' ? 'text-black  bg-gray-200' : 'text-gray-400'}`}
                >
                  <span className=" flex text-xl  self-center ml-6">All Orders</span>
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('pendingOrder')}
                  className={`flex items-center hover:bg-gray-200 py-2 w-full ${selectedPage === 'pendingOrder' ? 'text-black  bg-gray-200' : 'text-gray-400'}`}
                >
                <span className=" flex text-xl  self-center ml-6">Pending Orders</span>
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('completedOrders')}
                  className={`flex items-center hover:bg-gray-200 py-2 w-full ${selectedPage === 'completedOrders' ? 'text-black  bg-gray-200' : 'text-gray-400'}`}
                >
                <span className=" flex text-xl  self-center ml-6">Completed Orders</span>
                </button>
              </li>
             
                
                </>
              )}
              <li className="mb-2">
                <button
                  onClick={handleAdminDropdown}
                  className={`flex items-center hover:bg-gray-200 py-2 w-full ${adminDropdown  ? 'text-black bg-gray-200' : 'text-gray-400'}`}
                >
                  <span className="ml-2 flex text-xl  self-center "><HiUsers size={20} className='mt-1 mr-6' />Admin {adminDropdown  ? (<AiOutlineDown className='mt-2 text-sm  ml-[75px]'/>):(<AiOutlineRight className='mt-2 text-sm ml-[75px] '/>) }</span>
                </button>
              </li>
              {adminDropdown && (
                <>
 <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('allAdmin')}
                  className={`flex items-center hover:bg-gray-200 py-2 w-full ${selectedPage === 'allAdmin' ? 'text-black bg-gray-200' : 'text-gray-400'}`}
                >
                  <span className=" flex text-xl  self-center ml-6">All Admin</span>
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('addAdmin')}
                  className={`flex items-center hover:bg-gray-200 py-2 w-full ${selectedPage === 'addAdmin' ? 'text-black  bg-gray-200' : 'text-gray-400'}`}
                >
                <span className=" flex text-xl  self-center ml-6">Add Admin</span>
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('removeAdmin')}
                  className={`flex items-center hover:bg-gray-200 py-2 w-full ${selectedPage === 'removeAdmin' ? 'text-black  bg-gray-200' : 'text-gray-400'}`}
                >
                <span className=" flex text-xl  self-center ml-6">Remove Admin</span>
                </button>
              </li>
             
                
                </>
              )}
              <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('users')}
                  className={`flex items-center hover:bg-gray-200 py-2 w-full ${selectedPage === 'users' ? 'text-black bg-gray-200' : 'text-gray-400'}`}
                >
                  <span className="ml-2 flex text-xl  self-center "><HiUsers size={20} className='mt-1 mr-6' />Users</span>
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('Session')}
                  className={`flex items-center hover:bg-gray-200 py-2 w-full ${selectedPage === 'Session' ? 'text-black bg-gray-200' : 'text-gray-400'}`}
                >
                  <span className="ml-2 flex text-xl  self-center "><MdOutlineWatchLater size={20} className='mt-1 mr-6' />Sessions</span>
                </button>
              </li>
              
              <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('content')}
                  className={`flex items-center hover:bg-gray-200 py-2 w-full ${selectedPage === 'content' ? 'text-black  bg-gray-200' : 'text-gray-400'}`}
                >
                  <span className="ml-2 flex text-xl  self-center "><BiBookContent size={20} className='mt-1 mr-6' />Content</span>
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('earning')}
                  className={`flex items-center hover:bg-gray-200 py-2 w-full ${selectedPage === 'earning' ? 'text-black  bg-gray-200' : 'text-gray-400'}`}
                >
                  <span className="ml-2 flex text-xl  self-center "><AiOutlineDollarCircle size={20} className='mt-1 mr-6' />Earning</span>
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('notification')}
                  className={`flex items-center hover:bg-gray-200 py-2 w-full ${selectedPage === 'notification' ? 'text-black   bg-gray-200' : 'text-gray-400'}`}
                >
                  <span className="ml-2 flex text-xl  self-center "><BiBell size={20} className='mt-1 mr-6' />Notifications</span>
                </button>
              </li>
              
            </ul>
          </div>
        </div>
      )}
      <div className="flex-1 overflow-x-hidden overflow-y-auto p-">
        <Navbar/>
        {content}
      </div>
      {!isOpen && (
        <button 
        // onClick={toggleSidebar}
         className="md:h fixed top-4 left-4 mt-2   bg-transparent p-2 rounded-full">
          <RiMenuLine size={30} />
        </button>
      )}
    </div>}
    </>
  );
};

export default Sidebar;