import React from 'react';
import bn1 from '../../../images/bn1.jpg';
import bn2 from '../../../images/bn2.jpg';
import bn3 from '../../../images/bn3.jpg';
import bn4 from '../../../images/bn4.jpg';
const Banner = () => {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators " data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"> </button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"> </button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
          <img style={{height:'500px'}} src={bn3} className="d-block w-100" alt="..."/>
        
          </div>
          <div class="carousel-item">
          <img style={{height:'500px'}} src={bn1} className="d-block w-100" alt="..."/>
          </div>
          
          <div class="carousel-item">
          <img style={{height:'500px'}} src={bn2} className="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
          <img style={{height:'500px'}} src={bn4} className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    );
};

export default Banner;