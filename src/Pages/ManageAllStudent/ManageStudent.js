import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../HomeComponent/Navigation/Navigation';

const ManageStudent = () => {
    const [manageStudent, setManageStudent] = useState([]);
    const [searchStudent, setSearchStudent] = useState([]);
    //get all Student
    useEffect(() => {
        fetch('http://localhost:5000/students')
            .then(res => res.json())
            .then(data => setManageStudent(data))


    }, [searchStudent])


    const handleSearch = (event) => {
        const searchText = event.target.value;

        const matchedStudents = manageStudent.filter(students => (students.phone === searchText) || (students.degree === searchText) || (students.email.toLowerCase().includes(searchText.toLowerCase())) || (students.name.toLowerCase().includes(searchText.toLowerCase()))

        );
        setSearchStudent(matchedStudents);
    }
    //romove student
    const removeStudent = (id) => {
        fetch(`http://localhost:5000/student/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("Student Remove SuccesFully")
                }
            })
    }


    return (
        <div >
            <Navigation></Navigation>
            <div className='update-banner'>

            </div>

            <div style={{ marginTop: '100px' }} className='container'>
                <div className='row ms-5'>
                    <h1 className='text-center mb-5'>All <span style={{ color: '#5F9EA0' }}>student</span></h1>
                    <div className='d-flex justify-content-center mb-4'>
                        <input className='field p-2' type="search" name="" id=""
                            onChange={handleSearch}
                            placeholder="Search user..."
                        />
                        <div>
                            {/* <button className='btn btn-secondary  px-4 py-2 mt-2'>Search</button> */}

                        </div>
                    </div>

                    {
                        searchStudent?.filter(student =>
                            <div key={student._id} style={{ border: 'none' }} className='card img-box col-12 col-lg-4 col-md-4'>
                                <div className='my-4 border student'>
                                    <img className='card-img' width="100%" height="300px" src={student.img} alt="" />

                                    <div className='d-flex  justify-content-between m-3' >
                                        <h5 className='text-secondary'>{student.name}</h5>
                                        <small className='text-secondary'>{student.degree}</small>

                                    </div>
                                    <div>
                                        <Link to={`/student/${student._id}`}>
                                            <button className='btn  student-btn'>See Details</button>
                                        </Link>
                                        <button onClick={() => removeStudent(student?._id)} className='btn  mt-1 ms-3 student-btn rounded-pill '>Remove Student</button>

                                    </div>




                                </div>
                            </div>)

                    }



                </div>
            </div>
        </div>
    );
};

export default ManageStudent;