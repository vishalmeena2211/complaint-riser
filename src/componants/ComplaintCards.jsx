import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';


const ComplaintCards = () => {

    const [complaintsData,setComplaintsData] = useState(null);
    // const complaintsData = [
    //     {
    //       id: 1,
    //       title: "Complaint 1",
    //       description: "This is the description of complaint 1.",
    //     },
    //     {
    //       id: 2,
    //       title: "Complaint 2",
    //       description: "This is the description of complaint 2.",
    //     },
    //     // Add more complaints as needed
    //   ];

        useEffect(()=>{
            const getData = async ()=>{
                    try{
                        const res = await axios.get('http://localhost:5000/api/v1/listcomplaint');
                        const data= res.data;
                        console.log(res)
                        setComplaintsData(data);

                    }catch(err){
                        console.log(err);
                    }

            }
            getData();
        },[])


  return (
        
     <div className="flex justify-start flex-col w-full h-screen">
    { complaintsData && complaintsData.map((complaint) => (
        <NavLink to='/Complaints' state={{complaint:complaint  }} >
 <div className="bg-white rounded-lg shadow-lg p-4 my-4 w-full">
 <div className="font-bold text-xl text-blue-500 mb-2">{complaint.complaintBy}</div>
 <p className="text-gray-700 text-base">{complaint.category}</p>
</div>  
</NavLink>  ))}
  </div>
  )
}

export default ComplaintCards
