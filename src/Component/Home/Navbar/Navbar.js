import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <h2 class="navbar-brand text-info" >Car Surgeous</h2>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link mr-5 text-white" href="#">Home </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5 text-white" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5 text-white" href="#" >Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5 text-white" href="#" >Reviews</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5 text-white" href="#" >Contract Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5 text-white" href="#" >Login</a>
            </li>
          </ul>
         
        </div>
      </nav>
    );
};

export default Navbar;