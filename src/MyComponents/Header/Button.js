import React from 'react'
import "./All.css"

export const Button = (props) => {
    const newLocal = "none"
  return (
    <div>
        <button className={props.cname} style={{backgroundColor:"#222E3E",color:"#fff"}}>{props.text}</button>
    </div>
  )
}
