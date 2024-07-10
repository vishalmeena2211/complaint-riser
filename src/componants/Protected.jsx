import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';


const Protected = ({Componant}) => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn);

    useEffect(()=>{
        if(!isLoggedIn){
            navigate('/');
             }
    },[])
    
  return (
    <div>
        <Componant/>
    </div>
  )
}

export default Protected
