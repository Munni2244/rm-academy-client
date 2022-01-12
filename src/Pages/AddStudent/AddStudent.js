import React, { useState } from 'react';
import Navigation from '../HomeComponent/Navigation/Navigation';
import logo from '../../images/add-logo.png'
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
const AddStudent = () => {
    const [addStudent, setAddStudent] = useState({});
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    // const fieldChange = (e) => {
    //     const field = e.target.name;
    //     const value = e.target.value;
    //     const newData = { ...addStudent };
    //     newData[field] = value;
    //     setAddStudent(newData);
    // }

    const onSubmit = (data) => {

        fetch('http://localhost:5000/student', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire(
                        'Good job!',
                        'Student Added Successfully!'
                    )

                }

                console.log(data);
            })
    }

    return (
        <div>
            <Navigation></Navigation>
            <div className='update-banner'>

            </div>
            <div style={{ marginTop: '60px' }} className='container'>
                <h1 className='text-center'>Please Add A <span style={{ color: '#5F9EA0' }}>Student</span> </h1>
                <div className='row'>

                    <div className='col-12 col-lg-6 col-md-6 mt-5'>
                        <div className='text-center'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input style={{width:'90%'}} className='field' {...register("name", { required: true })} placeholder=' Name' /> <br />
                                {/* error */}
                                {errors.name && <span className='text-danger'>Name field is required</span>} <br />

                                <input style={{width:'90%'}} className='field' {...register("email", { required: true })} placeholder="email" /> <br />
                                {/* error */}
                                {errors.email && <span className='text-danger'>Email field is required</span>} <br />

                                <input style={{width:'90%'}} className='field' type="number" {...register("phone", { required: true })} placeholder=' Number' /> <br />
                                {/* error */}
                                {errors.phone && <span className='text-danger'>This field is required</span>} <br />
                                <input style={{width:'90%'}} className='field' type="text" {...register("degree", { required: true })} placeholder=' degree' /> <br />
                                {/* error */}
                                {errors.degree && <span className='text-danger'>This field is required</span>} <br />

                                <input style={{width:'90%'}} className='field' type="url" {...register("img", { required: true })} placeholder=' Image url' /> <br />
                                {/* error */}
                                {errors.img && <span className='text-danger'>Image field is required</span>} <br />

                                <input style={{width:'90%'}} className='field' type="text" {...register("sub", { required: true })} placeholder=' Subject' /> <br />

                                {/* error */}
                                {errors.sub && <span className='text-danger'>Subject field is required</span>} <br />

                                <input className='student-btn  px-5 py-2' type="submit" />

                            </form>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 col-md-6'>
                        <div className='text-center'>
                            <img src={logo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddStudent;