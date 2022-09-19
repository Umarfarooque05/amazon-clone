import { isContentEditable } from '@testing-library/user-event/dist/utils';
import React from 'react';
import "./All.css";
import { Button } from './Button';

const buttonContent=[
  {
    id:1,
    text:"All",
  },
  {
    id:2,
    text:"Best Sellers",
  },
  {
    id:3,
    text:"Today's Deals",
  },
  {
    id:4,
    text:"Mobiles",
  },
  {
    id:5,
    text:"Costumer Services",
  },
  {
    id:6,
    text:"Books",
  },
  {
    id:7,
    text:"Electronics",
  },
  {
    id:8,
    text:"Prime",
  },
  {
    id:9,
    text:"Fashion",
  },
  {
    id:10,
    text:"New Release",
  },
  {
    id:11,
    text:"Home & kitchen",
  },
  {
    id:12,
    cname:"forthbutton",
    text:"Amazon Pay"
  },
  {
    id:13,
    cname:"thirdbutton",
    text:"Computers"
  },
  {
    id:14,
    cname:"secondbutton",
    text:"Coupons"
  },
  {
    id:15,
    cname:"lastbutton",
    text:"Toys & Games"
  },

]

export const All = () => {
  return (
    <div className='container-fluid header'>
        {buttonContent.map(data=>(
          <Button  key={data.id} className={data.cname} text={data.text}></Button>
        ))}        
    </div>
  )
}
