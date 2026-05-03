import React from 'react'
import './Gallery_cards.css'

export default function Gallery_cards({data , onClick}) {

  return (
    <>
    <div className="col-lg-12  "  onClick={onClick} >
        <div className="gallery_card">
            <img src={data.img} alt="oops" />
        </div>
    </div>
    
    
    </>
  )
}
