import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AllStudent.css';
const AllStudent = () => {
    const [allStudent, setAllStudent] = useState([]);
    //get all Student
    useEffect(() => {
        fetch('http://localhost:5000/students')
            .then(res => res.json())
            .then(data => setAllStudent(data))


    }, [allStudent])

  
//romove student
const removeStudent=(id)=>{
    fetch(`http://localhost:5000/student/${id}`,{
        method:'DELETE',

    })
    .then(res=> res.json())
    .then(data=> {
        if(data.acknowledged){
            alert("Student Remove SuccesFully")
        }
    })
 }
  

    return (
        <div style={{ marginTop: '100px' }} className='container'>
            <div className='row ms-5'>
                <h1 className='text-center mb-5'>Leatest <span style={{ color: '#5F9EA0' }}>student</span></h1>


                {
                    allStudent?.map(student =>
                        <div  key={student._id} style={{ border: 'none' }} className='card img-box col-12 col-lg-4 col-md-4'>
                            <div className='my-4 border student'>
                                <img className='card-img' width="100%" height="300px" src={student.img} alt="" />

                                <div className='d-flex  justify-content-between m-3' > 
                                    <h5 className='text-secondary'>{student.name}</h5>
                                    <small className='text-secondary'>{student.degree}</small>
                                   
                                </div>
                                <div>
                                <Link to={`/student/${student._id}`}>
                                        <button  className='btn  student-btn'>See Details</button>
                                    </Link>                         
                                    <button onClick={()=> removeStudent(student?._id)} className='btn  mt-1 ms-3 student-btn rounded-pill '>Remove Student</button>
                                    
                                </div>
                             

                                    
                
                            </div>
                        </div>)

                }



            </div>
        </div>
    );
};

export default AllStudent;