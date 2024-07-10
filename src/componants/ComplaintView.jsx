import React, { useEffect ,useState} from 'react';
import axios from 'axios'
import { useLocation} from "react-router-dom"

function ComplaintView() {

    const [formData,setFormData] = useState(null);
    let location = useLocation();


    const getdata= async()=>{
      try{
        const res = await axios.get('http://localhost:5000/api/v1/getcomplaint/653e684be321a4dd36744f57');
        location.state.complaint ? setFormData(location.state.complaint):setFormData(res.data);
      }catch(err){

     console.log(err)
      }
    }

    useEffect(()=>{

        getdata();
    },[])

    // const formData = {
    //     complaintBy: 'John Doe',
    //     category: 'Category 2',
    //     description: 'This is a sample complaint description.',
    //     wardNo: 'Ward 5',
    //     status: 'Initiated',
    //     witness1Status: 'Not Approved',
    //     witness2Status: 'Not Approved',
    //     aadharNo: '1234 5678 9876',
    //     remark1: 'This is remark 1.',
    //     remark2: 'This is remark 2',
    //   };
      
  return (
    <>

    {
      formData &&
    
    <div className="max-w-md mx-auto mt-8">
      <div className="p-4 bg-white rounded-lg shadow-md mb-4">
        <h2 className="text-lg text-blue-600">Complaint Details</h2>
      </div>
      <div className="p-4 bg-white rounded-lg shadow-md mb-4">
        <strong className="text-lg text-blue-600">Complaint By:</strong>
        <p className="text-gray-800">{formData.complaintBy}</p>
      </div>
      <div className="p-4 bg-white rounded-lg shadow-md mb-4">
        <strong className="text-lg text-blue-600">Category:</strong>
        <p className="text-gray-800">{formData.category}</p>
      </div>
      <div className="p-4 bg-white rounded-lg shadow-md mb-4">
        <strong className="text-lg text-blue-600">Description of Complaint:</strong>
        <p className="text-gray-800">{formData.description}</p>
      </div>
      <div className="p-4 bg-white rounded-lg shadow-md mb-4">
        <strong className="text-lg text-blue-600">Ward No:</strong>
        <p className="text-gray-800">{formData.wardNo}</p>
      </div>
      <div className="p-4 bg-white rounded-lg shadow-md mb-4">
        <strong className="text-lg text-blue-600">Aadhar No:</strong>
        <p className="text-gray-800">{formData.aadharNo}</p>
      </div>
      <div className="p-4 bg-white rounded-lg shadow-md mb-4">
        <strong className="text-lg text-blue-600">Remark 1:</strong>
        <p className="text-gray-800">{formData.remark1}</p>
      </div>
      <div className="p-4 bg-white rounded-lg shadow-md">
        <strong className="text-lg text-blue-600">Remark 2:</strong>
        <p className="text-gray-800">{formData.remark2}</p>
      </div>
    </div>
    }
        </>
  );
}

export default ComplaintView;
