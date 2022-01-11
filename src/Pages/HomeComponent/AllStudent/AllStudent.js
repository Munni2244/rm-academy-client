import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../images/bn1.jpg'

const AllStudent = () => {
    // const [homestudent, setHomestudent] = useState([]);

    // useEffect(() => {
    //     fetch('https://blooming-meadow-50062.herokuapp.com/student')
    //         .then(res => res.json())
    //         .then(data => setHomestudent(data))
    //     AOS.init();

    // }, [homestudent])

    return (
        <div style={{ marginTop: '100px' }} className='container'>
            <div className='row '>
                <h1 className='text-center mb-5'>Leatest student</h1>


                {
                    // allStudent?.slice(0, 4).map(student =>
                    <div style={{ border: 'none' }} className='card img-box col-12 col-lg-3 col-md-3'>
                        <div>
                            <img className='card-img' width="100%" height="300px" src={img1} alt="" />
                            <div className='card-img-overlay d-flex justify-content-center align-items-center'>

                                {/* <Link to={`/student/${student._id}`}>
                                            <button style={{ marginTop: '100px' }} className='btn  add-btn'>Add to cart</button>
                                        </Link> */}
                            </div>
                            <div>
                                <h5 className='text-secondary'>name</h5>
                                <h5 className='text-secondary'>name</h5>

                            </div>
                        </div>
                    </div>

                }



            </div>
        </div>
    );
};

export default AllStudent;