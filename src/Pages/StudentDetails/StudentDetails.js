import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import img from '../../images/st11.jpg'
import Navigation from '../HomeComponent/Navigation/Navigation';
const StudentDetails = () => {
    const {id}= useParams();
    const [studentDetails, setStudentsDetails]=useState({});
// console.log(id);

    useEffect(()=>{
       fetch(`https://peaceful-island-86859.herokuapp.com/students/${id}`)
       .then(res=> res.json())
       .then(data => setStudentsDetails(data))
    },[])
    // console.log(studentDetails);

    
    
    return (
        <div>
            <Navigation></Navigation>
            <div className='container'>
            <div className='row m-5'>
                <div className='col-12 col-lg-6 col-md-6 mt-3'>
                 <div>
                
                <div className='ms-2 mt-4'>
                <h3 className='fw-bold'>{studentDetails?.name}</h3>
                 <h6> {studentDetails?.sub}</h6>
                </div>
                 <div className='mt-4 border p-3'>
                     
                 <p>Email: {studentDetails?.email}</p>
                 <p>Degree: {studentDetails?.degree}</p>
                 <p>Phone: {studentDetails?.phone}</p>
                 </div>
               <Link to={`/editForm/${studentDetails?._id}`}>
               <button className='btn my-4 rounded-pill student-btn '>Edit Information</button>
               </Link>

               

                 </div>
                </div>
                <div className='col-12 col-lg-6 col-md-6 mt-3 '>
                 <div className='text-center'>
               
                 <img height="350px" className='rounded-circle w-75 ' src={studentDetails?.img} alt="" />
        
                 </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default StudentDetails;