import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div  style={{marginTop:'80px'}}>
        <section id="about">
  <div className="container-fluid">
  <div className="row p-4  footter">
    
    <div className="col-12 col-md-12 col-lg-3 ms-4 mt-4">
      <h3 className='fw-bold'>RM Academy</h3>
  <div className="d-flex">
   <h1><i className="fab fa-google text-primary "></i></h1>
  <h1> <i className="fab fa-twitter text-warning"></i></h1>
  <h1><i className="fab fa-youtube text-danger"></i></h1>

</div>
    </div>
    <div className="col-12 col-md-12 col-lg-3 mt-4 footer-text">
    <h5>Contact</h5>
    <ul>
     <li>Address: Via Venti Settembre , Ireland</li>
      <li>Phone: +3244575656</li>
  
    </ul>
  </div>
  <div className="col-12 col-md-12 col-lg-2 mt-4 footer-text ms-3">
    <h5>Catagories</h5>
    <ul>
      <li>Enviroment</li>
      <li>  Ruls</li>
      <li> Motivate</li>
    </ul>
  </div>

  <div className="col-12 col-md-12 col-lg-2 mt-4 footer-text ms-3">
    <h5>NewsLetter</h5>
  <p><span>Sign up for our newsletter and get update about our letest Promotion</span></p>
 
  </div>
 
 
  </div>
</div>
<footer style={{backgroundColor:'#5F9EA0'}} className='text-center p-3 text-light'>
<span  >&copy;Copyright 2021 RM Academy  proggress</span>
</footer>
</section>


    </div>

    );
};

export default Footer;