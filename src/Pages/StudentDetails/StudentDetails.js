import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import img from '../../images/st11.jpg'
import Navigation from '../HomeComponent/Navigation/Navigation';
const StudentDetails = () => {
    const {id}= useParams();
    const [studentDetails, setStudentsDetails]=useState({});
// console.log(id);

    useEffect(()=>{
       fetch(`http://localhost:5000/students/${id}`)
       .then(res=> res.json())
       .then(data => setStudentsDetails(data))
    },[])
    // console.log(studentDetails);

    
    return (
        <div>
            <Navigation></Navigation>
            <div className='container'>
            <div className='row m-5'>
                <div className='col-12 col-lg-6 col-md-6 mt-5'>
                 <div>
                <div className='ms-3'>
                <h3 className='fw-bold'>{studentDetails?.name}</h3>
                 <h6> {studentDetails?.sub}</h6>
                </div>
                 <div className='mt-4 border p-3'>
                     
                 <p>Email: {studentDetails?.email}</p>
                 <p>Degree: {studentDetails?.degree}</p>
                 <p>Phone: {studentDetails?.phone}</p>
                 </div>
                 </div>
                </div>
                <div className='col-12 col-lg-6 col-md-6 mt-5 '>
                 <div className='text-center'>
                 <img className='rounded-pill w-75 ' src={studentDetails?.img} alt="" />
                 </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default StudentDetails;