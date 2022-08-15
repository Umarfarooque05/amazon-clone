import React from 'react';
import "./Navbar.css";
import logo from '../../images/logo1.jpg';
import logo2 from '../../images/india.jpg';
import logo3 from '../../images/cart.webp';
import { Images } from './Images';
import { Location } from './Location';
import { Searchbox } from './Searchbox';
import { Signin } from './Signin';
import { Order } from './Order'
import { Dropdown } from './Dropdown';

export const Navbar = () => {
  return (
    <div className='container-fluid navbar'>
      <Images url={logo} width={"11%"} height={"10%"}></Images>
      <Location></Location>
      <Searchbox></Searchbox>
      <Images url={logo2}  width={"2%"} height={"2%"}></Images>
      <Dropdown></Dropdown>
      <Signin></Signin>
      <Order></Order>
      <Images url={logo3} width={"5%"}></Images>
    </div>
  )
}