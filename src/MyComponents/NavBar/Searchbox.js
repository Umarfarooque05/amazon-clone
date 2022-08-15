import React from 'react'
import { Dropdown } from "./Dropdown";
import "./Navbar.css"

export const Searchbox = () => {
  return (
    <div className='searchbox'>
        <form className="container-fluid">
          <div className="input-group search-box">
            <span className="input-group-text dropdown-toggle" data-bs-toggle="dropdown" id="basic-addon1">All</span>
            <Dropdown/>
            <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1"/>
            <button className="btn btn-warning " type="submit"><i className="fa fa-search"></i></button>
          </div>
        </form>
    </div>
  )
}
