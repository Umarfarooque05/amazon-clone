import React from 'react';
import './Slides.css'

export const Slides = () => {
  
  const carousel =[
    { 
      id:1,
      url:'https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg',
      status:'carousel-item active image1',
      image1:'image1'
    },
    {
      id:2,
      url:'https://m.media-amazon.com/images/I/61gFPL8x3+L._SX3000_.jpg',
      status:'carousel-item image2',
      image2:'image2'
    },
    {
      id:3,
      url:'https://m.media-amazon.com/images/I/61BsKK5N4zL._SX3000_.jpg',
      status:'carousel-item image3',
      image3:'image3'
    }
  ]
    console.log(carousel)
  const slide = carousel.map(data => (
    <div key={data.id} className={data.status}>
    
    <img src={data.url} width={"100%"} height={"100%"} alt={"#"} style={carousel.color}/>
    </div>
  ))

  return (
    <>
    <div style={{ position:'relative' }}>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {slide}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span style={{position:'relative',bottom:'23%' }} className="carousel-control-prev-icon" aria-hidden="true"></span> 
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span style={{position:'relative',bottom:'23%' }} className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </>
  )
}
