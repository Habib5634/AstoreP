import React, { useState } from 'react';
import axios from 'axios';
import API from '../../../services/API';
import { useSelector } from 'react-redux';
const AddProduct = () => {
  const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];
  

  const [formData, setFormData] = useState({
    imageUrls:[],
    
    name: '',
    category: [],
    price: '',
    description: '',
    
    weight: '',
    
    
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    if (type === 'checkbox') {
      setFormData(prevState => {
        if (checked) {
          return {
            ...prevState,
            [name]: [...prevState[name], value]
          };
        } else {
          return {
            ...prevState,
            [name]: prevState[name].filter(item => item !== value)
          };
        }
      });
    } else {
      if (name === 'category') {
        const categories = value.split(','); // Separate categories using comma
        setFormData({
          ...formData,
          [name]: categories
        });
      } else if (name === 'imageUrls') {
        const urlsArray = value.split(',').map(url => url.trim()); // Split and trim URLs
        setFormData({
          ...formData,
          [name]: urlsArray
        });
      } else {
        const numericValue = !isNaN(value) ? parseFloat(value) : value;
        setFormData({
          ...formData,
          [name]: numericValue
        });
      }
    }
  };
  
  

  const handleSubmit = async(e) => {
    e.preventDefault();
  
  
    try {
      const { data } = await API.post('https://black-crab-tie.cyclic.app/event/addEvent', {
        imageUrls: formData.imageUrls,
     
      name: formData.name,
      category: formData.category,
      price: formData.price,
      description: formData.description,
      
      weight: formData.weight,

      });
  
      if (data) {
        console.log(data);
      }
    } catch (error) {
      console.log(error)
      if (error.response && error.response.data.message) {
        console.log(error.response.data.message);
      }
    }
  
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className=" mx-auto bg-white p-8 shadow-lg rounded-lg">
<div className='flex'>
    
      <div className='flex flex-col w-1/2 mr-3'>
  <label className="block text-gray-700 text-sm font-bold mb-2">Image URLs (comma separated)</label>
  <input
  type="text"
  name="imageUrls"
  value={formData.imageUrls.join(', ')} // Join the array with commas and spaces for display
  onChange={handleChange}
  placeholder="Image URLs"
  className="w-full mb-4 p-2 border border-gray-300 rounded"
/>
</div>
<div className='flex flex-col w-1/2 mr-3'>
<label className="block text-gray-700 text-sm font-bold mb-2">Product Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Title"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      </div>    
      </div>
      
      <div className='flex'>
      <div className='flex flex-col w-1/2 mr-3'>
      <label className="block text-gray-700 text-sm font-bold mb-2">Product Price</label>
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
</div>
<div className='flex flex-col w-1/2 '>
<label className="block text-gray-700 text-sm font-bold mb-2">Product Description</label>
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      </div>
      </div>
      <div className='flex'>
      
      <div className='flex flex-col w-1/2 '>
      <label className="block text-gray-700 text-sm font-bold mb-2">Product Weight</label>
      <input
        type="number"
        name="weight"
        value={formData.weight}
        onChange={handleChange}
        placeholder="Weight"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      </div>
      </div>
      <div className='flex flex-col w-1/2 '>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Select Categories</label>
        {categories.map((category, index) => (
          <div key={index} className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="category"
                value={category}
                checked={formData.category.includes(category)}
                onChange={handleChange}
                className="mr-2"
              />
              {category}
            </label>
          </div>
        ))}
      </div>
      
      </div>
      
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4">
        Submit
      </button>
    </form>
  );
};

export default AddProduct;
