import React, { useState } from 'react'
import './Card.css'

export const Cards = () => {
  
  const cards =[
    { 
      id:1,
      text: 'Top pick for your home',
      url1:'/static/media/logo1.89e4c339d545c643a190.jpg',
      url2:'/static/media/logo1.89e4c339d545c643a190.jpg',
      see:'see more',
      islink:true,
    },
    {
      id:2,
      text: 'Amazon Pay | Book travel',
      url1:'/static/media/logo1.89e4c339d545c643a190.jpg',
      url2:'/static/media/logo1.89e4c339d545c643a190.jpg',
      see:'see more',
      islink:true,
    },
    {
      id:3,
      text: 'Up to 60% off | Styles for',
      url1:'/static/media/logo1.89e4c339d545c643a190.jpg',
      url2:'/static/media/logo1.89e4c339d545c643a190.jpg',
      see:'see all offers',
      islink:true,
    },
    { 
      id:4,
      text: 'Sign in for your best exper',
      sign:'sign in securely',
      islink:false,
    },
    {
      id:5,
      text: 'Top pick for your home',
      url1:'/static/media/logo1.89e4c339d545c643a190.jpg',
      url2:'/static/media/logo1.89e4c339d545c643a190.jpg',
      see:'see more',
      islink:true,
    },
    {
      id:6,
      text: 'Top pick for your home',
      url1:'/static/media/logo1.89e4c339d545c643a190.jpg',
      url2:'/static/media/logo1.89e4c339d545c643a190.jpg',
      see:'see more',
      islink:true,
    },
    {
      id:7,
      text: 'Top pick for your home',
      url1:'/static/media/logo1.89e4c339d545c643a190.jpg',
      url2:'/static/media/logo1.89e4c339d545c643a190.jpg',
      see:'see more',
      islink:true,
    },
    {
      id:8,
      text: 'Top pick for your home',
      url1:'/static/media/logo1.89e4c339d545c643a190.jpg',
      url2:'/static/media/logo1.89e4c339d545c643a190.jpg',
      see:'see more',
      islink:true,
    }
  ]

//   const imageCss = [
//   {
//     image:'image1'
//   },
//   {
//     image:'image2'
//   },
//   {
//     image:'image3'
//   }
// ]

  const [count, setCount] = useState(0);
  // const  handleClicked = function() {
  //     setCount(count++);
  //   }
  
  const amazonCards = cards.map(cardData =>(
    <div key={cardData.id} className='card' style={{ width: "20rem", padding: "1rem" }}>
        <h4 className='card-text'>{cardData.text}</h4>
        <img src={cardData.url1} className="card-img-top" alt="" /><br/>
        <img src={cardData.url2} className="card-img-top" alt="" />
        <div className="card-body link">{count}<br/>
        {cardData.islink ? (<button onClick={()=> setCount(count+1)} className="card-link">{cardData.see}</button>):(<button onClick={()=> setCount(count+1)} className='btn btn-warning'>{cardData.sign}</button>)}
        </div>
    </div>
    )          
    );

  return (
    <>
    <div >
      <div className='main-card'>
        {amazonCards}
      </div>
    </div>
    </>
  )
}