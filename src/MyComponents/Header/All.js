import React from 'react';
import "./All.css";
import { Button } from './Button';

export const All = () => {
  return (
    <div className='container-fluid header'>
        <Button text={'<strong>All'}></Button>
        <Button text={'Best Sellers'}></Button>
        <Button text={"Today's Deals"}></Button>
        <Button text={'Mobiles'}></Button>
        <Button text={'Costumer Services'}></Button>
        <Button text={'Books'}></Button>
        <Button text={'Electronics'}></Button>
        <Button text={'Prime'}></Button>
        <Button text={'Fashion'}></Button>
        <Button text={'New Release'}></Button>
        <Button text={'Home & kitchen'}></Button>
        <Button cname={'forthbutton'} text={'Amazon Pay'}></Button>
        <Button cname={'thirdbutton'} text={'Computers'}></Button>
        <Button cname={'secondbutton'} text={'Coupons'}></Button>
        <Button cname={'lastbutton'} text={'Toys & Games'}></Button>
    </div>
  )
}
