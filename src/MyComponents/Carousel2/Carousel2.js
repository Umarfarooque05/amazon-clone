import React from 'react'
import './Carousel2.css'

export const Carousel2 = () => {
  
  const carousel2 =[
      { 
        id:1,
        url:'https://m.media-amazon.com/images/I/61lvWAwSNxL._AC_SY200_.jpg',
      },
      {
        id:2,
        url:'https://m.media-amazon.com/images/I/81jT1iTxo7L._AC_SY200_.jpg',
      },
      {
        id:3,
        url:'https://m.media-amazon.com/images/I/81jSgAZMFVL._AC_SY200_.jpg',
      },{ 
        id:4,
        url:'https://m.media-amazon.com/images/I/51fuD3e0BAL._AC_SY200_.jpg',
      },
      {
        id:5,
        url:'https://m.media-amazon.com/images/I/81pEaSe3MML._AC_SY200_.jpg',
      },
      {
        id:6,
        url:'https://m.media-amazon.com/images/I/81Qy+8CSK-L._AC_SY200_.jpg',
      },
      {
        id:7,
        url:'https://m.media-amazon.com/images/I/71Aty5UO-3L._AC_SY200_.jpg',
      },
      {
        id:8,
        url:'https://m.media-amazon.com/images/I/51Y-GlagJfL._AC_SY200_.jpg',
      },
      {
        id:9,
        url:'https://m.media-amazon.com/images/I/61EdOTy+RpL._AC_SY200_.jpg',
      },
      {
        id:10,
        url:'https://m.media-amazon.com/images/I/61t05m2AJ1L._AC_SY200_.jpg',
      },
      {
        id:11,
        url:'https://m.media-amazon.com/images/I/618cEKgtvVL._AC_SY200_.jpg',
      },
    ]
    const imageSlider = carousel2.map(data => (
              <div style={{width:'60%'}} key={data.id}>
              <img src={data.url} alt={"#"}/>
              </div>
            ))
  return (
    <div className='container1'>
      <h4>New arrivals décor picks from local shops </h4>
      <a href='#'>explore</a>
      <span className='container2 scrollmenu'>
      {imageSlider}
      
      </span> 
    </div>
  )
}

      // <span>
      //     <span className="btn">❮ </span>
      // </span>