import React from 'react';
// import "./Navbar.css";
import logo from '../images/logo1.jpg';
import logo2 from '../images/india.jpg';
// import logo3 from '../images/cart.webp';
import {Images} from './Images';
import {Location} from './Location';
import {Searchbox} from './Searchbox'

export const Navbar = () => {
  return (
    <>
      <Images url={logo} width={"5%"} height={"5%"}></Images>
      <Location></Location>
      <Searchbox></Searchbox>
      <Location></Location>
      <Images url={logo2} ></Images>
    </>
  )
}

    /* <nav className="navbar navbar-expand-lg bg-dark main-detail">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className='logo1' src={logo} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><p>Hello <br />
          <strong>
           Select your location
          </strong>
           </p>
           </a>
        </li>
        <form className="container-fluid">
          <div className="input-group search-box">
            <span className="input-group-text dropdown-toggle" data-bs-toggle="dropdown" id="basic-addon1">All</span>
            <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
            <button class="btn btn-warning " type="submit"><i class="fa fa-search"></i></button>
          </div>
        </form>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"><img className='logo2' src={logo2} alt="" /></a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <p>Hello, Sign in <strong> Account & Lists </strong></p>
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li>
         <p>Return <strong>& Orders</strong></p> 
        </li>
        <li class="nav-item">
            <img className='logo3' src={logo3} alt="" />
          
        </li>
      </ul>
    </div>
  </div>
</nav> */