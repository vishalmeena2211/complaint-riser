import React, { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, } from '../redux/Slices/authSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CitizenLogin = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    // const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const notify = () => toast.success('Login Successfully!', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    const initialFormData = {
        aadharNo: '',
        password: '',
    };


    
    
    const [formData, setFormData] = useState(initialFormData);
    const [error, setError] = useState('');

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate the form data here if needed
        // For example, check if email and password are not empty
        if (!formData.aadharNo || !formData.password) {
            setError('Please fill in both email and password fields.');
            return;
        }

        const res = await axios.post('http://localhost:5000/api/v1/login',formData,{ withCredentials: true });
        const userToken = res.data.data.token;
        localStorage.setItem('token', userToken);

    // Dispatch the login action with the token
        dispatch(login(userToken));
        if(res.status===200){
            notify();
            setTimeout(()=>{

                navigate('/');
            },3000);

        }
        console.log("success",res);

        
        // console.log('Form Data:', formData);


    };

    useEffect(() => {

        
            if(isLoggedIn){
                navigate('/');
        }
        // Check if a token is present in local storage on page load
        if (!isLoggedIn && localStorage.getItem('token')) {
          // If a token is found in local storage, set the user as logged in
          dispatch(login(localStorage.getItem('token')));
        }
      }, [isLoggedIn, dispatch]);
    return (

        <>
        {!isLoggedIn  && <div className='m-5'>

            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-100 text-gray-900 m-auto">
                <h2 className="mb-10 text-3xl font-semibold text-center">Login to your account</h2>

                <form action="" onSubmit={handleSubmit} className="space-y-10">
                    <div className="space-y-4">
                        <div className="space-y-3">
                            <label htmlFor="aadharNo" className="block text-sm">Aadhar number</label>
                            <input type="text" name="aadharNo" id="aadharNo" placeholder="vishal@gmail.com" value={formData.aadharNo}
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


                    <button type="submit" className="w-full px-8 py-4 my-10 hover:bg-purple-50 border border-blue-600 transition duration-300 ease-linear  hover:text-blue-700 font-semibold rounded-md dark:bg-blue-600 dark:text-gray-100">Sign in</button>

                    <div className="flex items-center w-full ">
                        <hr className="w-full dark:text-gray-700" />
                        <p className="px-3 dark:text-gray-700">OR</p>
                        <hr className="w-full dark:text-gray-700" />
                    </div>

                    <p className="text-sm text-center dark:text-gray-400">Dont have account?
                        <NavLink to="/CitizenRagistration" rel="noopener noreferrer" className="focus:underline text-blue-600 hover:underline">Sign up here</NavLink>
                    </p>
                </form>
            </div>

                            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />

        </div>}
        </>
    )
}






export default CitizenLogin
