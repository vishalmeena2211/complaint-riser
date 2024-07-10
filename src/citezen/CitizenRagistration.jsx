
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const CitizenRagistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    aadharNo: '',
    password: '',
    gender: 'male', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const navigate = useNavigate()

  useEffect(()=>{
    if(isLoggedIn){
      navigate('/');
}
  },[])

  const handleSubmit = async(e) => {
    e.preventDefault();
      try{
        const res = await axios.post('http://localhost:5000/api/v1/create',formData);
        console.log(res.status);
      }catch(err){
        console.log(err);
      }
   
  };

  return (
    <>
   
    { !isLoggedIn && <div className='m-5'>
      <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-100 dark:text-gray-900 m-auto">
        <h2 className="mb-3 text-3xl font-semibold text-center">Create an Account</h2>

        <form onSubmit={handleSubmit} className="space-y-8 ">
          <div className="space-y-1">
            <div className="space-y-3">
              <label htmlFor="name" className="block text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="name"
                className="w-full px-3 py-3 border rounded-md border-gray-500  bg-gray-300 text-gray-700 focus:outline-none focus:border-violet-400 "
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="address" className="block text-sm">
              Address
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
            <div className="space-y-3">
              <label htmlFor="aadharNo" className="block text-sm">
               Aadhar number
              </label>
              <input
                type="text"
                name="aadharNo"
                id="aadharNo"
                placeholder="123456789012"
                className="w-full px-3 py-3 border rounded-md border-gray-500 bg-gray-300 text-gray-700 focus:outline-none focus:border-violet-400"
                value={formData.aadharNo}
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
          <div className="space-y-2">
            <label className="block text-sm">Gender</label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                />
                <span className="text-sm">Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                />
                <span className="text-sm">Female</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={formData.gender === 'other'}
                  onChange={handleChange}
                />
                <span className="text-sm">Other</span>
              </label>
            </div>
          </div>
          <div className="my-6 space-y-4">
            <NavLink to='/otp'>
            <button
              onClick={handleSubmit}
              className="w-full px-8 py-4 hover:bg-purple-50 transition duration-300 ease-linear border border-blue-600 hover:text-blue-700 font-semibold rounded-md dark:bg-blue-600 dark:text-gray-100"
            >
              Register
            </button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>}
    </>
  );
};


export default CitizenRagistration
