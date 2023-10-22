import React, { useEffect, useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

import API from '../../../services/API'
import {BsThreeDotsVertical} from 'react-icons/bs'

const AllProduct = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(5);
    const [pagesToShow] = useState(5);
    const [menu, setMenu] = useState(false)
    const [product,setProduct] = useState([])
//get all product
const getProducts = async()=>{
    try {
        const { data } = await API.get('https://black-crab-tie.cyclic.app/event/getAllProduct');
        if (data) {
            setProduct(data)
            console.log(data);
        }
    } catch (error) {
        console.log(error);
    }
}



    const totalPosts = product.length;
    const totalPageNumbers = Math.ceil(totalPosts / postPerPage);


    
    const handleToggleMenu = (itemId) => {
        setMenu(menu === itemId ? false : itemId);
    }

    let startPage, endPage;
    if (totalPageNumbers <= pagesToShow) {
        startPage = 1;
        endPage = totalPageNumbers;
    } else {
        const halfPagesToShow = Math.floor(pagesToShow / 2);
        if (currentPage <= halfPagesToShow) {
            startPage = 1;
            endPage = pagesToShow;
        } else if (currentPage + halfPagesToShow >= totalPageNumbers) {
            startPage = totalPageNumbers - pagesToShow + 1;
            endPage = totalPageNumbers;
        } else {
            startPage = currentPage - halfPagesToShow;
            endPage = currentPage + halfPagesToShow;
        }
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = product.slice(indexOfFirstPost, indexOfLastPost);


    
    useEffect   (() => {
        getProducts();
    }, []);
    return (
        <>
            <div className='mt-6 pl-4 pr-4'>
                <div className='flex justify-between'>
                    <h1 className='text-2xl mb-1 ml-2'>All products</h1>
                    <button className='text-blue-500 mr-2'>View All</button>
                </div>
                <div className="overflow-x-auto border border-gray-300 rounded-xl">
                    <table className="min-w-full bg-white ">
                        <thead>
                            <tr className='text-gray-500'>
                                <th className="py-2 px-2 text-start border-b">Product Title</th>
                                <th className="py-2 px-4 text-start border-b">Category</th>
                                <th className="py-2 px-4 text-start border-b">Price</th>
                                <th className="py-2 px-4 text-start border-b">Status</th>
                                <th className="py-2 px-4 text-start border-b">Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {currentPost.map((item, index) => (
                                <tr key={item.id} className='hover:bg-slate-100'>
                                    <td className="py-1.5 text-gray-500 px-2 text-sm flex items-center "><img src={item.imageUrl} alt='profile' className='w-10 h-10 mr-2 rounded-full' />{item.name}</td>
                                    <td className="py-1.5 text-gray-500 px-4 text-sm">{item.category}</td>
                                    <td className="py-1.5 text-gray-500 px-4 text-sm  ">{item.price}</td>
                                   
                                    <td className="py-1.5 text-gray-500 px-4 text-sm flex">{item.status}</td>
                                    <td className="py-1.5 text-gray-500 px-4 text-sm relative" onClick={() => handleToggleMenu(item._id)}><BsThreeDotsVertical/>
                                        {menu == item._id && (
                                            <div className='absolute flex flex-col border p-2 space-y-2 z-50  bg-white'>
                                                <button>View</button>
                                                <button>Edit</button>
                                                <button>Delete</button>
                                            </div>
                                        )}
                                    </td>


                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-center mt-4">
                    {currentPage > 1 && (
                        <button onClick={() => handlePageClick(currentPage - 1)} className="mx-2  text-[#7644FF] font-medium  rounded">
                            <AiOutlineLeft className='border text-2xl p-1' />
                        </button>
                    )}
                    {pageNumbers.map(number => (
                        <button
                            key={number}
                            onClick={() => handlePageClick(number)}
                            className={`mx-2  text-[#7644FF] font-medium py-1 border px-2.5 rounded ${currentPage === number ? 'text-white bg-[#7644FF]' : ''}`}
                        >
                            {number}
                        </button>
                    ))}
                    {currentPage < totalPageNumbers && (
                        <button onClick={() => handlePageClick(currentPage + 1)} className="mx-2 font-medium  first-letter: text-[#7644FF]  rounded">
                            <AiOutlineRight className='border text-2xl p-1' />
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}

export default AllProduct