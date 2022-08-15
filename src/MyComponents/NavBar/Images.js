import React from 'react'

export const Images = ({url,width,height}) => {
  return (
    <>
        <img src={url} style={{backgroundColor:"#121821", width:width , height:height}} alt="" />
    </>
  )
}
