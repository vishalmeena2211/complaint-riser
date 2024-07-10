import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';

// const data = {
//   officeNo: 'Office 1',
//   counselorName: 'John Doe',
//   address: '123 Main Street',
//   phoneNumber: '555-123-4567',
//   wardNo: 'Ward 5',
// };

function CounsellorDetail() {



  const [data,setData] = useState(null);
  const getdata=async()=>{
    try{

      const res = await axios.get('http://localhost:5000/api/v1/getCounsellor/653e82a4c6440121a6b6251e');
      setData(res.data);

    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    getdata();
  },[])
  return (
    <>
    {
      data && 
      <div className="flex justify-center items-center h-screen">
      <div className="max-w-md">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-4">
          <strong className="text-2xl text-blue-600 mb-2">Office Information</strong>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-4">
          <strong className="text-lg text-blue-600">Office No:</strong>
          <p className="text-gray-800">{data.officeNo}</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-4">
          <strong className="text-lg text-blue-600">Counselor Name:</strong>
          <p className="text-gray-800">{data.counselorName}</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-4">
          <strong className="text-lg text-blue-600">Address:</strong>
          <p className="text-gray-800">{data.address}</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-4">
          <strong className="text-lg text-blue-600">Phone Number:</strong>
          <p className="text-gray-800">{data.phoneNumber}</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <strong className="text-lg text-blue-600">Ward No:</strong>
          <p className="text-gray-800">{data.wardNo}</p>
        </div>
      </div>
    </div>
    }
    </>
  );
}


export default CounsellorDetail;
