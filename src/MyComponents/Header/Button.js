import React from 'react'
import "./All.css"

export const Button = (props) => {
  return (
    <div>
        <button className={props.className} style={{backgroundColor:"#222E3E",color:"#fff"}}>{props.text}</button>
    </div>
  )
}
