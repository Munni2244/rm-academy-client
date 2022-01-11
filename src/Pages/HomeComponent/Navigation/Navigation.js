import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/degree-removebg-preview.png'
const Navigation = () => {
    return (
        <div>
            <div>
             <nav className=" navbar-expand-lg navbar-light">
     <div className="container-fluid bg-light text-dark">
     <div className='p-1 d-flex justify-content-between'>
       <h6>Phone: +0324367546546</h6>
     
      <div className='d-flex'>
      <h6 className='navbar-nav '><i className="fab fa-facebook mx-3"></i></h6>
       <h6 className='navbar-nav '><i className="fab fa-instagram-square"></i></h6>
       <h6 className='navbar-nav '><i className="fab fa-twitter  mx-3"></i></h6>
      </div>
     </div>
     </div>
   </nav>
        </div>
      <nav style={{backgroundColor:'#5F9EA0'}} className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
              <Link to="/home" className="navbar-brand text-warning fw-bold" href="#">
                  <img width="60px" height="40px" src={logo} alt="" />
                  RM<span style={{ color: 'white' }}>AcademY</span></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/home" className="nav-link active text-light" aria-current="page" href="#">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link active text-light" href="#">Contact</Link>
                  </li>
      
                </ul>
                <form className="d-flex">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                   
                      <Link to="/login"> <button className="btn border text-light me-2" type="submit">Login</button></Link>
                    <Link to="/register"> <button className="btn border text-light" type="submit">Register</button></Link>
                  </ul>
      
                </form>
              </div>
            </div>
          </nav>
      </div>
    );
};

export default Navigation;