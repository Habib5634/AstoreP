import React, { useState } from 'react';

const AddProduct = () => {
  const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];

  const [formData, setFormData] = useState({
    imageUrl: '',
    hoveredImageUrl: '',
    title: '',
    category: [],
    price: '',
    realPrice: '',
    rating: '',
    reviews: '',
    descimg1:"",
    descimg2:"",
    descimg3:"",
    descimg4:"",
    descimg5:"",
    descimg6:"",
    descimg7:"",
    descImage: '',
    DescCategory: '',
    widthTop: '',
    widthBottom: '',
    height: '',
    depth: ''
    
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
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to handle form submission here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className=" mx-auto bg-white p-8 shadow-lg rounded-lg">
<div className='flex'>
    <div className='flex flex-col w-1/2 mr-3'>
    <label>Image Url</label>
      <input
        type="text"
        name="imageUrl"
        value={formData.imageUrl}
        onChange={handleChange}
        placeholder="Image URL"
        className="w-full  mb-4 p-2 border border-gray-300 rounded"
      />
      </div>
      <div className='flex flex-col w-1/2'>
      <label>Image Url</label>
      <input
        type="text"
        name="hoveredImageUrl"
        value={formData.hoveredImageUrl}
        onChange={handleChange}
        placeholder="Hovered Image URL"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      </div>
      </div>
      <div className='flex'>
      <div className='flex flex-col w-1/2 mr-3'>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      </div>
      <div className='flex flex-col w-1/2 '>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Categories</label>
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
      </div>
      <div className='flex'>
      <div className='flex flex-col w-1/2 mr-3'>
      <input
        type="text"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
</div>
<div className='flex flex-col w-1/2 '>
      <input
        type="text"
        name="realPrice"
        value={formData.realPrice}
        onChange={handleChange}
        placeholder="Real Price"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      </div>
      </div>
      <div className='flex'>
      <div className='flex flex-col w-1/2 mr-3'>
      <input
        type="text"
        name="rating"
        value={formData.rating}
        onChange={handleChange}
        placeholder="Rating"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      </div>
      <div className='flex flex-col w-1/2 '>
      <input
        type="text"
        name="reviews"
        value={formData.reviews}
        onChange={handleChange}
        placeholder="Reviews"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      </div>
      </div>
      <div className='flex'>
      <div className='flex flex-col w-1/2 mr-3'>
      <input
        type="text"
        name="descimg1"
        value={formData.descimg1}
        onChange={handleChange}
        placeholder="Images (comma separated)"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      </div>
      <div className='flex flex-col w-1/2 '>
      <input
        type="text"
        name="descimg2"
        value={formData.descimg2}
        onChange={handleChange}
        placeholder="Images (comma separated)"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      </div>
      </div>
      <div className='flex'>
      <div className='flex flex-col w-1/2 mr-3'>
      <input
        type="text"
        name="descimg3"
        value={formData.descimg3}
        onChange={handleChange}
        placeholder="Images (comma separated)"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      </div>
      <div className='flex flex-col w-1/2 '>
      <input
        type="text"
        name="descimg4"
        value={formData.descimg4}
        onChange={handleChange}
        placeholder="Images (comma separated)"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      </div>
      </div>
      <div className='flex'>
      <div className='flex flex-col w-1/2 mr-3'>
      <input
        type="text"
        name="descimg5"
        value={formData.descimg5}
        onChange={handleChange}
        placeholder="Images (comma separated)"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      </div>
      <div className='flex flex-col w-1/2 '>
      <input
        type="text"
        name="descimg6"
        value={formData.descimg6}
        onChange={handleChange}
        placeholder="Images (comma separated)"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      </div>
      </div>
      <div className='flex'>
      <div className='flex flex-col w-1/2 mr-3'>
      <input
        type="text"
        name="DescCategory"
        value={formData.DescCategory}
        onChange={handleChange}
        placeholder="Description Category"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      </div>
<div className='flex flex-col w-1/2 '>
      <input
        type="text"
        name="widthTop"
        value={formData.widthTop}
        onChange={handleChange}
        placeholder="Width Top"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      </div>
      </div>
      <div className='flex '>
<div className='flex flex-col w-1/2 mr-3'>
      <input
        type="text"
        name="widthBottom"
        value={formData.widthBottom}
        onChange={handleChange}
        placeholder="Width Bottom"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      </div>
<div className='flex flex-col w-1/2 '>
      <input
        type="text"
        name="height"
        value={formData.height}
        onChange={handleChange}
        placeholder="Height"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      </div>
      </div>
      <input
        type="text"
        name="depth"
        value={formData.depth}
        onChange={handleChange}
        placeholder="Depth"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="descImage"
        value={formData.descImage}
        onChange={handleChange}
        placeholder="Description Image"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4">
        Submit
      </button>
    </form>
  );
};

export default AddProduct;
