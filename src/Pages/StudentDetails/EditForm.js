import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navigation from '../HomeComponent/Navigation/Navigation';
import './EditForm.css'
const EditForm = () => {
    const {id}= useParams();
    const [editForm, setEditForm]=useState({});
    const { register, handleSubmit } = useForm();

// console.log(id);

    useEffect(()=>{
       fetch(`http://localhost:5000/students/${id}`)
       .then(res=> res.json())
       .then(data => setEditForm(data))
    },[])

    //edit information
    const onSubmit = data => {
      
        fetch(`http://localhost:5000/student/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire(
                        'Good job!',
                        'Update Successfully!'
                    )

                }

                console.log(data);
            })
    };
    return (
        <div>
            <Navigation></Navigation>
            <div className='update-banner  '>
               
            </div>
            <div className='text-center mt-5 '>
                <h1>Please Update <span style={{color:'#5F9EA0'}}>Your Information</span></h1>

                </div>
           <div >
           <div  className='text-center mt-5'>
            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className='field' {...register("name", {required: true})} defaultValue={editForm?.name }  /> <br />
                                <input className='field' {...register("email" , {required: true})} placeholder="email" defaultValue={editForm?.email || ""}  /> <br />

                                <input className='field' type="number" {...register("phone", {required: true})}  defaultValue={editForm?.phone || ""} /> <br />
                                <input className='field' type="text" {...register("degree", {required: true})} defaultValue={editForm?.degree || ""}  /> <br />

                                <input className='field' type="url" {...register("img", {required: true})} defaultValue={editForm?.img || ''}  /> <br />
                                <input className='student-btn  px-5 py-2' type="submit" />

                            </form>
            </div>
           </div>
        </div>
    );
};

export default EditForm;