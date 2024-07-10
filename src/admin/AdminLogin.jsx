import React, { useState } from 'react'

import axios from 'axios';
const AdminLogin = () => {

    const initialFormData = {
        email: '',
        password: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            setError('Please fill in both email and password fields.');
            return;
        }

        const res = await axios.post('',formData);
        console.log("success",res);

        console.log('Form Data:', formData);


    };
    return (
        <div className='m-5'>


            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-100 text-gray-900 m-auto border border-black">
                <h2 className="mb-10 text-3xl font-semibold text-center">Login to your account</h2>

                <form action="" onSubmit={handleSubmit} className="space-y-10">
                    <div className="space-y-4">
                        <div className="space-y-3">
                            <label htmlFor="email" className="block text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="vishal@gmail.com" value={formData.email}
                                onChange={handleInputChange} required className="w-full px-3 py-3.5 border rounded-md border-gray-500 bg-gray-300 text-gray-700 focus:border-violet-400" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="/" className="text-xs hover:underline text-gray-800 hover:text-gray-900">Forgot password?</a>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" value={formData.password}
                                onChange={handleInputChange} required className="w-full px-3 py-3.5 border rounded-md border-gray-500 bg-gray-300 text-gray-700 focus:border-violet-400" />
                        </div>
                    </div>


                    {error && (
                        <div className="text-red-600 text-sm">{error}</div>
                    )}


                    <button type="submit" className="w-full px-8 py-4 my-10 hover:bg-purple-50 border border-green-600 transition duration-300 ease-linear  hover:text-green-700 font-semibold rounded-md dark:bg-green-600 dark:text-gray-100">Sign in</button>

                    <div className="flex items-center w-full ">
                        <hr className="w-full dark:text-gray-700" />
                        <p className="px-3 dark:text-gray-700">OR</p>
                        <hr className="w-full dark:text-gray-700" />
                    </div>

                    <p className="text-sm text-center dark:text-gray-400">Dont have account?
                        <a href="/" rel="noopener noreferrer" className="focus:underline text-green-600 hover:underline">Sign up here</a>
                    </p>
                </form>
            </div>



        </div>
    )
}





export default AdminLogin
