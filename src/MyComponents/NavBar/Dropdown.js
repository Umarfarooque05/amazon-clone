import React from 'react'
import "./Navbar.css";

export const Dropdown = () => {

  const amazonList = [
    { id: 1, name: 'All Categories' },
    { id: 2, name: 'Alexa Skills' },
    { id: 3, name: 'Amazon Devices' },
    { id: 4, name: 'Amazon Fasion' },
    { id: 5, name: 'Amazon Pharmacy' },
    { id: 6, name: 'Appliances' },
    { id: 7, name: 'Apps &amp; Games' },
    { id: 8, name: 'Appliances' },
    { id: 9, name: 'Baby' },
    { id: 10, name: 'Beauty' },
    { id: 11, name: 'Car & Moterbike' },
    { id: 12, name: 'Clothing & Accessories' },
    { id: 13, name: 'Collectibles' },
    { id: 14, name: 'Computers & Accessories' },
    { id: 15, name: 'Deals' },
    { id: 16, name: 'Electronics' },
    { id: 17, name: 'Furniture' },
    { id: 18, name: 'Garden & Outdoors' },
    { id: 19, name: 'Gift Cards' }
  ];
  
  const listItem = amazonList.map(data => (
    <option key={data.id}>{data.name}</option>
  ))
  
  return (
    <div>
      <ul className="dropdown-menu shutter">
        {listItem}
      </ul>
    </div>
  )
}