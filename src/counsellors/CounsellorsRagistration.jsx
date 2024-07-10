
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


const CounsellorsRagistration = () => {
  const [formData, setFormData] = useState({
    officeNo: '',
    counselorName: '',
    address: '',
    phoneNumber: '',
    wardNo: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const res = await axios.post('http://localhost:5000/api/v1/createCounsellor',formData);
    console.log(res.status);
  };

  return (
    <div className='m-5'>
      <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-100 dark:text-gray-900 m-auto">
        <h2 className="mb-3 text-3xl font-semibold text-center">Create an Account</h2>

        <form onSubmit={handleSubmit} className="space-y-8 ">
          <div className="space-y-1">
            <div className="space-y-3">
              <label htmlFor="officeNo" className="block text-sm">
                First Name
              </label>
              <input
                type="text"
                name="officeNo"
                id="officeNo"
                placeholder="officeNo"
                className="w-full px-3 py-3 border rounded-md border-gray-500  bg-gray-300 text-gray-700 focus:outline-none focus:border-violet-400 "
                value={formData.officeNo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="counselorName" className="block text-sm">
              counselorName
              </label>
              <input
                type="text"
                name="counselorName"
                id="counselorName"
                placeholder="counselorName"
                className="w-full px-3 py-3 border rounded-md border-gray-500 bg-gray-300 text-gray-700 focus:outline-none focus:border-violet-400"
                value={formData.counselorName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="address" className="block text-sm">
              address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="address"
                className="w-full px-3 py-3 border rounded-md border-gray-500 bg-gray-300 text-gray-700 focus:outline-none focus:border-violet-400"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phoneNumber" className="block text-sm">
              phoneNumber
              </label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="phoneNumber"
                className="w-full px-3 py-3 border rounded-md border-gray-500 bg-gray-300 text-gray-700 focus:outline-none focus:border-violet-400"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="wardNo" className="block text-sm">
              wardNo
              </label>
              <input
                type="text"
                name="wardNo"
                id="wardNo"
                placeholder="wardNo"
                className="w-full px-3 py-3 border rounded-md border-gray-500 bg-gray-300 text-gray-700 focus:outline-none focus:border-violet-400"
                value={formData.wardNo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="******"
                className="w-full px-3 py-3 border rounded-md border-gray-500 bg-gray-300 text-gray-700 focus:outline-none focus:border-violet-400"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="my-6 space-y-4">
            <NavLink to='/otp'>
            <button
            onClick={handleSubmit}
              className="w-full px-8 py-4 hover:bg-purple-50 transition duration-300 ease-linear border border-green-600 hover:text-green-700 font-semibold rounded-md dark:bg-green-600 dark:text-gray-100"
            >
              Register
            </button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};



export default CounsellorsRagistration
