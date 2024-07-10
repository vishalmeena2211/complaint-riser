import React, { useState } from 'react';
import axios from 'axios'

const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];

function ComplaintForm() {
  const [formData, setFormData] = useState({
    complaintBy: '',
    category: '',
    description: '',
    wardNo: '',
    status: 'Initiated',
    witness1Status: 'Not Approved',
    witness2Status: 'Not Approved',
    aadharNo: '',
    remark1: '',
    remark2: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = async(e) => {
    e.preventDefault();
    alert('submitted')
    try{
        const res = await axios.post('http://localhost:5000/api/v1/createcomplaint',formData);
        console.log("data send sucsessfully",res);
    }catch(err){
      console.log(err)
    }
    console.log(formData);
  };

  

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl text-blue-600 mb-4">Complaint Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="complaintBy" className="block text-lg text-blue-600 mb-1">
            Complaint By:
          </label>
          <input
            type="text"
            id="complaintBy"
            name="complaintBy"
            value={formData.complaintBy}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-lg text-blue-600 mb-1">
            Category:
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md">
            <option value="" disabled>Select Category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-lg text-blue-600 mb-1">
            Description of Complaint:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="wardNo" className="block text-lg text-blue-600 mb-1">
            Ward No:
          </label>
          <input
            type="text"
            id="wardNo"
            name="wardNo"
            value={formData.wardNo}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="aadharNo" className="block text-lg text-blue-600 mb-1">
            Aadhar No:
          </label>
          <input
            type="text"
            id="aadharNo"
            name="aadharNo"
            value={formData.aadharNo}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="remark1" className="block text-lg text-blue-600 mb-1">
            Remark 1:
          </label>
          <textarea
            id="remark1"
            name="remark1"
            value={formData.remark1}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="remark2" className="block text-lg text-blue-600 mb-1">
            Remark 2:
          </label>
          <textarea
            id="remark2"
            name="remark2"
            value={formData.remark2}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <button
          onClick={(e)=>{handleSubmit(e)}}
          className="bg-blue-600 text-white text-lg p-2 rounded-md hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ComplaintForm;
