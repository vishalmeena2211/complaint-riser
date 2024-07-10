// WelcomePage.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className="bg-blue-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-[600px]">
        <h1 className="text-3xl font-extrabold text-blue-600 mb-4">
          Welcome to Our Complaint Riser Website
        </h1>
        <p className="text-gray-700 text-lg mb-4">
          We're here to help you raise and manage your complaints easily.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          Our website allows you to:
        </p>
        <ul className="list-disc pl-6 text-gray-700 text-lg">
          <li>Submit and track complaints online</li>
          <li>Receive updates on the status of your complaints</li>
          <li>Communicate with support and customer service</li>
          <li>And much more...</li>
        </ul>
        <p className="text-gray-700 text-lg mt-4">
          Get started today by signing up or logging in!
        </p>
        <div className="mt-6 flex justify-end">
          <NavLink to='/CitizenLogin' >
          <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
            Sign Up / Log In
          </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
