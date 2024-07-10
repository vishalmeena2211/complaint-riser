// FunctionalityBoxPage.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const FunctionalityBoxPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col gap-20 items-center justify-center">

      <h1 className='text-4xl text-blue-600 font-bold '>Welcome To Complaint Riser Site</h1>
      <div className="max-w-5xl p-8 bg-white shadow-xl rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">Features</h1>




       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NavLink to='/ComplaintForm' >
          {/* Functionality Box 1 */}
          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <h2 className="text-xl font-semibold mb-3 text-blue-700">Do Complaint</h2>
            <p className="text-gray-600">This is the content of Functionality Box 1.</p>
          </div>
          </NavLink>
          {/* Functionality Box 2 */}
          <NavLink to='/ViewComplaints' >
          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <h2 className="text-xl font-semibold mb-3 text-blue-700">See All  Complaints</h2>
            <p className="text-gray-600">This is the content of Functionality Box 2.</p>
          </div>
          </NavLink>
          {/* Functionality Box 3 */}
          <NavLink to='/ComplaintResponse' >
          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <h2 className="text-xl font-semibold mb-3 text-blue-700">Compaints Response</h2>
            <p className="text-gray-600">This is the content of Functionality Box 3.</p>
          </div>
         </NavLink>
        </div>
      </div>
    </div>
  );
};

export default FunctionalityBoxPage;
