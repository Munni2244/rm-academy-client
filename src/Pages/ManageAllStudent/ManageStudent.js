import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navigation from '../HomeComponent/Navigation/Navigation';

const ManageStudent = () => {
    const [allStudent, setAllStudent] = useState([]);
    const [searchStudent, setSearchStudent] = useState([]);
    //get all Student
    useEffect(() => {
        fetch('https://peaceful-island-86859.herokuapp.com/students')
            .then(res => res.json())
            .then(data => {
                setAllStudent(data)
                setSearchStudent(data)
            } )


    }, [])

//search student
    const handleSearch = (event) => {
        const searchText = event.target.value;

        const matchedStudents = allStudent.filter(students => (students.phone === searchText) || (students.degree === searchText) || (students.email.toLowerCase().includes(searchText.toLowerCase())) || (students.name.toLowerCase().includes(searchText.toLowerCase()))

        );
        setSearchStudent(matchedStudents);
    }
    //romove student
    const removeStudent = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'

        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://peaceful-island-86859.herokuapp.com/student/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )

                        }
                        else {
                            Swal.fire(
                                'Delete Cancel'
                            )

                        }
                    })
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
                        <input className='field p-2' type="text" name="" id=""
                            onChange={handleSearch}
                            placeholder="Search Student..."
                        />
                        <div>
                            {/* <button className='btn btn-secondary  px-4 py-2 mt-2'>Search</button> */}

                        </div>
                    </div>

                    {searchStudent.length ?
                        searchStudent?.map(student =>
                            <div key={student._id} style={{ border: 'none' }} className='card img-box col-12 col-lg-4 col-md-4'>
                                <div className='my-4 border student'>
                                    <img className='card-img' width="100%" height="300px" src={student.img} alt="" />

                                    <div className='d-flex  justify-content-between m-3' >
                                        <h5 className='text-secondary'>{student.name}</h5>
                                        <small className='text-secondary'>{student.degree}</small>

                                    </div>
                                    <div className='m-3'>
                                        <p> Email: {student.email}</p>
                                        <p>Phone: {student.phone}</p>
                                    </div>
                                    <div>
                                      
                                        <button onClick={() => removeStudent(student?._id)} className='btn  mt-1 ms-3 student-btn rounded-pill '>Remove Student</button>

                                    </div>




                                </div>
                            </div>)

                   : 
                   <h4 className='text-danger text-center'>No Result Found</h4>
                   }



                </div>
            </div>
        </div>
    );
};

export default ManageStudent;