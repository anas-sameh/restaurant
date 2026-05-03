import React from 'react'
import './Party.css'
export default function Party(props) {
    const {data} = props
  return (
    <>
    <div className="party_img ">
      <div className="bg_party_img">
        <img src={data.img} alt="oops" />
      
        <div className="party_over_lay"></div>
        <div className="party_details">
            <h3>{data.name} </h3>
            <span>${data.price}</span>
            <p>{data.description}</p>
        </div>
        </div>
    </div>
    
    
    

    
    </>
  )
}
