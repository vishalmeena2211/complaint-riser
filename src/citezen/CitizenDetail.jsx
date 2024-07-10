import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useSelector } from 'react-redux';
// const data = {
//   name: 'John Doe',
//   gender: 'Male',
//   aadharNo: '1234 5678 9876',
//   address: '123 Main Street, City, Country',
//   createdAt: '2023-11-07',
// };

function CitizenDetail() {

  const [data,setData] = useState(null);
  const token = localStorage.getItem('token');
  const tokendata = {
    token:token
  }
  // console.log(token);
  const getdata=async()=>{
    try{

      const res = await axios.post('http://localhost:5000/api/v1/get',tokendata);
      // console.log(res.data)
      setData(res.data);

    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    // console.log(typeof(token));
    getdata();
  },[])

  return (
    <>
    {
      data &&
      <div className="flex justify-center items-center h-screen">
      <div className="max-w-md">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-4">
          <strong className="text-2xl text-blue-600 mb-2">Citizen Information</strong>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-4">
          <strong className="text-lg text-blue-600">Name:</strong>
          <p className="text-gray-800">{data.name}</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-4">
          <strong className="text-lg text-blue-600">Gender:</strong>
          <p className="text-gray-800">{data.gender}</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-4">
          <strong className="text-lg text-blue-600">Aadhar No:</strong>
          <p className="text-gray-800">{data.aadharNo}</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-4">
          <strong className="text-lg text-blue-600">Address:</strong>
          <p className="text-gray-800">{data.address}</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <strong className="text-lg text-blue-600">Created At:</strong>
          <p className="text-gray-800">{data.createdAt}</p>
        </div>
      </div>
    </div>
    }
    </>
  );
}

export default CitizenDetail;
